import React, { useState } from "react";
import { CircleAlert } from "lucide-react";
import { regions, directions } from "../util/constants";

function EducationSuggestions() {
  const [value, setValue] = useState({
    name: "",
    region: "",
    district: "",
    phoneNumber: "",
    direction: "",
    suggestions: "",
  });

  const [errorValue, setErrorValue] = useState({
    name: false,
    region: false,
    district: false,
    phoneNumber: false,
    direction: false,
    suggestions: false,
  });

  const handleInputChange = (e) => {
    const { name, value: inputValue } = e.target;

    if (name === "phoneNumber") {
      let digits = inputValue.replace(/\D/g, "");
      if (!digits.startsWith("998")) {
        digits = "998" + digits;
      }

      let formatted = "+" + digits;
      formatted = formatted.replace(
        /^(\+998)(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2}).*/,
        function (_, g1, g2, g3, g4, g5) {
          let result = g1;
          if (g2) result += "-" + g2;
          if (g3) result += "-" + g3;
          if (g4) result += "-" + g4;
          if (g5) result += "-" + g5;
          return result;
        }
      );

      setValue((prevState) => ({
        ...prevState,
        [name]: formatted,
      }));
    } else {
      setValue((prevState) => ({
        ...prevState,
        [name]: inputValue,
      }));
    }

    setErrorValue((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: !value.name.trim(),
      region: !value.region.trim(),
      district: !value.district.trim(),
      phoneNumber: !value.phoneNumber.trim(),
      direction: !value.direction.trim(),
      suggestions: !value.suggestions.trim(),
    };

    setErrorValue(errors);

    const hasErrors = Object.values(errors).some((val) => val);
    if (hasErrors) return;

    console.log("Form Data:", value);

    setValue({
      name: "",
      region: "",
      district: "",
      phoneNumber: "",
      direction: "",
      suggestions: "",
    });

    setErrorValue({
      name: false,
      region: false,
      district: false,
      phoneNumber: false,
      direction: false,
      suggestions: false,
    });
  };

  const region = regions.find((r) => r.value == value.region);

  const errorLength = (title) => {
    return (
      <>
        <span className="absolute text-xl font-bold text-red-600 top-2 right-2">
          <CircleAlert />
        </span>
        <p className="mt-1 text-sm text-red-600">"{title}" to'ldirish shart</p>
      </>
    );
  };

  const renderInput = (type, name, placeholder, extraProps = {}) => (
    <div className="relative mb-7">
      <input
        type={type}
        name={name}
        value={value[name]}
        onChange={handleInputChange}
        className={`px-4 py-3 text-base border ${
          errorValue[name] ? "border-red-500" : "border-[#151d41]"
        } text-[#495057] bg-white rounded w-full focus:outline-myGreen`}
        placeholder={placeholder}
        {...extraProps}
      />
      {errorValue[name] && errorLength(placeholder)}
    </div>
  );

  const renderSelect = (
    name,
    placeholder,
    options = [],
    labelKey = "title",
    valueKey = "value"
  ) => (
    <>
      <select
        name={name}
        value={value[name]}
        onChange={handleInputChange}
        className={`px-3 py-4 text-base border ${
          errorValue[name] ? "border-red-500" : "border-[#151d41]"
        } text-[#495057] bg-white rounded w-full focus:outline-myGreen`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id || option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
      {errorValue[name] && errorLength(placeholder)}
    </>
  );

  return (
    <div id="hello" className="pt-7 max-w-[700px] w-full mx-auto bg-white">
      <h1 className="text-3xl my-2.5 font-bold text-myGreen text-center relative z-10 Title__aft">
        Ta'lim sifatini oshirishga qaratilgan murojaat va takliflarni yuboring
      </h1>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap items-center w-full md:flex-row py-7 px-3.5"
        >
          <div className="w-full lg:w-1/2 lg:pr-2">
            {renderInput("text", "name", "F.I.SH")}
            {renderInput("tel", "phoneNumber", "Telefon", { maxLength: "17" })}
          </div>
          <div className="w-full lg:w-1/2 lg:pl-2">
            <div className="flex flex-wrap gap-y-4 mb-7">
              <div className="relative w-full sm:w-1/2 sm:pr-2">
                {renderSelect("region", "Hudud", regions, "title", "value")}
              </div>
              <div className="relative w-full sm:w-1/2 sm:pl-2">
                {region?.tumanlar
                  ? renderSelect(
                      "district",
                      "Tuman",
                      region.tumanlar,
                      "sub__title",
                      "value"
                    )
                  : renderSelect(
                      "district",
                      "Tuman",
                      [],
                      "sub__title",
                      "value"
                    )}
              </div>
            </div>
            <div className="relative mb-7">
              {renderSelect(
                "direction",
                "Yo'nalishni tanlang",
                directions,
                "title",
                "value"
              )}
            </div>
          </div>
          <div className="relative w-full mb-7">
            <textarea
              name="suggestions"
              rows={5}
              value={value.suggestions}
              onChange={handleInputChange}
              placeholder="Murojaat va takliflar"
              className={`p-4 text-base border ${
                errorValue.suggestions ? "border-red-500" : "border-[#151d41]"
              } text-[#495057] bg-white rounded w-full focus:outline-myGreen`}
            ></textarea>
            {errorValue.suggestions && errorLength("Murojaat va takliflar")}
          </div>
          <button
            type="submit"
            className="text-lg text-white bg-myGreen py-2.5 px-10 rounded-md mx-auto hover:bg-blue-700 transition-all ease-linear duration-200"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default EducationSuggestions;

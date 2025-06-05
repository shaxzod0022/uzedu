import React, { useState } from "react";
import { CircleAlert } from "lucide-react";
import { regions } from "../util/constants";

function MurojatYuborish() {
  const [value, setValue] = useState({
    ism: "",
    familiya: "",
    otasiningIsmi: "",
    email: "",
    phoneNumber: "",
    taklif: "",
  });

  const [errorValue, setErrorValue] = useState({
    ism: false,
    familiya: false,
    otasiningIsmi: false,
    email: false,
    phoneNumber: false,
    region: false,
    taklif: false,
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
      ism: !value.ism.trim(),
      familiya: !value.familiya.trim(),
      otasiningIsmi: !value.otasiningIsmi.trim(),
      email: !value.email.trim(),
      phoneNumber: !value.phoneNumber.trim(),
      taklif: !value.taklif.trim(),
    };

    setErrorValue(errors);

    const hasErrors = Object.values(errors).some((val) => val);
    if (hasErrors) return;

    console.log("Form Data:", value);

    setValue({
      ism: "",
      familiya: "",
      otasiningIsmi: "",
      email: "",
      phoneNumber: "",
      taklif: "",
    });

    setErrorValue({
      ism: false,
      familiya: false,
      otasiningIsmi: false,
      email: false,
      phoneNumber: false,
      taklif: false,
    });
  };

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
          errorValue[name] ? "border-red-500" : "border-myGreen"
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
        } text-[#495057] bg-white rounded w-full focus:outline-[#28a745]`}
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
    <div className="pt-10 px-4 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6"
      >
        {/* Chap ustun */}
        <div className="flex flex-col gap-4">
          {renderInput("text", "ism", "Ism")}
          {renderInput("text", "familiya", "Familiya")}
          {renderInput("text", "otasiningIsmi", "Otasining ismi")}
        </div>

        {/* O‘ng ustun */}
        <div className="flex flex-col gap-4">
          {renderInput("email", "email", "Email")}
          {renderInput("tel", "phoneNumber", "Telefon raqam", {
            maxLength: "17",
          })}
        </div>

        {/* Taklif */}
        <div className="md:col-span-2">
          <textarea
            name="taklif"
            rows={5}
            value={value.taklif}
            onChange={handleInputChange}
            placeholder="Taklif"
            className={`w-full p-4 text-base rounded-lg border ${
              errorValue.taklif ? "border-red-500" : "border-blue-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>
          {errorValue.taklif && errorLength("Taklif")}
        </div>

        {/* Yuborish tugmasi */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-myGreen text-white text-base font-medium py-2.5 px-8 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
}

export default MurojatYuborish;

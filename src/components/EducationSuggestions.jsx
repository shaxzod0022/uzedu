import React, { useState } from 'react';
import { regions } from '../util/constants';

function EducationSuggestions() {
    const [value, setValue] = useState({
        name: '',
        region: '',
        district: '',
        phoneNumber: '',
        direction: '',
        suggestions: ''
    });

    const [errorValue, setErrorValue] = useState({
        name: false,
        region: false,
        district: false,
        phoneNumber: false,
        direction: false,
        suggestions: false
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', value);

        setValue({
            name: '',
            region: '',
            district: '',
            phoneNumber: '',
            direction: '',
            suggestions: ''
        });
    };

    const region = regions.find((r) => r.value == value.region);

    return (
        <div className='pt-7 max-w-[700px] w-full mx-auto bg-white'>
            <h1 className='text-3xl my-2.5 font-bold text-myGreen text-center relative z-10 educationTitle__aft'>
                Ta'lim sifatini oshirishga qaratilgan murojaat va takliflarni yuboring
            </h1>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className='flex flex-wrap w-full pt-7'>
                    <div className='w-1/2 pr-2'>
                        <div className='mb-7'>
                            <input
                                type="text"
                                name="name"
                                value={value.name}
                                onChange={handleInputChange}
                                className='px-3 py-4 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full h-[calc(1.5em + 0.75rem + 2px)]'
                                placeholder='F.I.SH'
                                required
                            />
                        </div>
                        <div className='mb-7'>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={value.phoneNumber}
                                onChange={handleInputChange}
                                className='px-3 py-4 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full h-[calc(1.5em + 0.75rem + 2px)]'
                                placeholder='Telefon'
                            />
                        </div>
                    </div>
                    <div className='w-1/2 pl-2'>
                        <div className='flex space-x-4 mb-7'>
                            <div className='w-1/2'>
                                <select
                                    name="region"
                                    value={value.region}
                                    onChange={handleInputChange}
                                    className='px-3 py-4 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full'
                                    required
                                >
                                    <option value="">Hududni tanlang</option>
                                    {regions.map((region) => (
                                        <option key={region.id} value={region.value}>
                                            {region.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-1/2'>
                                <select
                                    name="district"
                                    value={value.district}
                                    onChange={handleInputChange}
                                    className='px-3 py-4 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full'
                                    required
                                >
                                    <option value="">Tumanlar</option>
                                    {value.region && region &&
                                        region.tumanlar.map((district) => (
                                            <option key={district.id} value={district.value}>
                                                {district.sub__title}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='mb-7'>
                            <select
                                name="direction"
                                value={value.direction}
                                onChange={handleInputChange}
                                className='px-3 py-4 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full'
                                required
                            >
                                <option value="">Yo'nalishni tanlang</option>
                                <option value="1">Maktabgacha ta'lim</option>
                                <option value="2">Maktab ta'lim</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full mb-7'>
                        <textarea
                            name="suggestions"
                            rows={5}
                            value={value.suggestions}
                            onChange={handleInputChange}
                            placeholder="Murojaat va takliflar"
                            className='p-4 m-0 text-base font-normal border border-[#151d41] text-[#495057] bg-white rounded outline-none w-full'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='text-lg text-white bg-myGreen py-2.5 px-10 rounded-md mx-auto hover:bg-primary hover:text-black transition-all ease-linear duration-200'
                    >Yuborish</button>
                </form>
            </div>
        </div>
    );
}

export default EducationSuggestions;

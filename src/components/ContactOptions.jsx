import React from 'react'

function ContactOptions({ data }) {
    return (
        <div className='flex items-center justify-center flex-wrap my-24 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] w-full mx-auto'>
            {data.map(item => (
                <div
                    key={item.id}
                    className='w-[300px] h-[350px] m-1.5'
                >
                    <a
                        href={item.link}
                        target='_blank'
                        className='block w-full h-full bg-white rounded-md shadow-[0_5px_12px_rgba(224,_224,_224,_0.5)] transition-all duration-200 ease-linear hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(154,_152,_152,_0.5)]'
                    >
                        <div className='flex flex-col items-center justify-center h-full py-10 px-[50px]'>
                            <img
                                src={item.img}
                                alt={`${item.title} icon`}
                                className='h-[100px] w-full object-contain'
                            />
                            <h2 className='text-base text-[#47495a] font-bold uppercase mt-10 text-center'>{item.title}</h2>
                            <p className='text-[#6a7c92] text-sm text-center mt-2.5'>{item.disp}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ContactOptions

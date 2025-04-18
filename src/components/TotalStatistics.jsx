import React from 'react'

function TotalStatistics({
    setIsStatistics
}) {
    return (
        <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#0000004C]'
            onClick={() => setIsStatistics(false)}
        >
            <div className='max-w-[700px] w-full relative pointer-events-none flex items-center my-7 min-h-[cals(100%-3.5rem)]'>
                <div className='relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding border border-[#00000033
] rounded'>
                    <div className='flex items-center justify-between w-full p-4 border-b border-b-[#dee2e6] rounded-tr-[cals(0.3rem-1px)] rounded-tl-[cals(0.3rem-1px)]'>
                        <h5 className='text-[#4c4083] text-xl leading-normal'>Oylar boyicha jami statistika</h5>
                        <button
                            className='p-4 ml-auto -m-4 text-2xl font-bold leading-none opacity-50 cursor-pointer'
                            onClick={() => setIsStatistics(false)}
                        >
                            <span aria-hidden='true'>x</span>
                        </button>
                    </div>
                    <div className='relative p-2 m-4'></div>
                </div>
            </div>
        </div>
    )
}

export default TotalStatistics
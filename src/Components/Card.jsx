import React from 'react'
import Chart1 from './Chart1'
function Card({ data }) {
    return (
        <>
            <div className=' duration-300 cursor-pointer sm:max-w-3xl w-80 border rounded-md shadow-lg shadow-[#4B5563] h-max p-4 hover:scale-105 flex flex-col gap-2 justify-center items-center  md:justify-center lg:justify-end overflow-x-scroll'>
                <h1 className='font-bold tracking-wide text-[#4B5563]'>{data.name}</h1>
                <Chart1 data={data} />
            </div>
        </>
    )
}

export default Card
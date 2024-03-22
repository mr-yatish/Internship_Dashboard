import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import External from './External';
import Card from './Card';
import { BarChart3, ChevronLeft, ChevronRight, Factory, NotebookPen, PencilRuler, SearchSlash, Sun, Moon, ExternalLink, CircleArrowOutUpRight, CircleArrowOutDownLeft } from "lucide-react";
let links = [
    {
        name: "External",
        icon: CircleArrowOutUpRight,
        to: '/'
    },
    {
        name: "Internal",
        icon: CircleArrowOutDownLeft,
        to: '/internal'
    }
]
function DashBoard() {
    const [activeNavIndex, setActivNavIndex] = useState(0);
    return (
        <div className={` duration-500 p-8 pt-20 w-full flex flex-col gap-8 bg-[#ffff]`}>
            <h1 className='font-bold text-3xl tracking-wider flex items-center gap-3 duration-1000 hover:underline text-[#4B5563]'> Research <SearchSlash /> </h1>
            <div className='w-full h-[1.7rem] border-b-[2px]'>
                <ul className='flex space-x-10 px-4'>
                    {
                        links.map((item, index) =>
                            <Link
                                to={item.to}
                                key={index}
                                className='px-2 cursor-pointer' style={activeNavIndex === index ? { borderBottomWidth: "2.5px", borderColor: '#4B5563', color: "#4B5563", fontWeight: 'bolder' } : { color: '#4B5563', fontWeight: 'bold' }}
                                onClick={() => setActivNavIndex(index)}
                            >
                                {item.name}</Link>)
                    }
                </ul>
            </div>
            <Outlet />
        </div>
    )

}

export default DashBoard
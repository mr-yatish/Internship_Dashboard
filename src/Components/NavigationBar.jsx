import React, { useState, useEffect } from 'react'
import { BarChart3, ChevronLeft, ChevronRight, Factory, NotebookPen, PencilRuler, SearchSlash, Sun, Moon } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
let navLinks = [
    {
        name: "Research",
        icon: SearchSlash,
        to: '/'
    },
    {
        name: "Planning",
        icon: NotebookPen,
        to: '/Planning'
    },
    {
        name: "Design",
        icon: PencilRuler,
        to: 'Design'
    },
    {
        name: "Manufacturing",
        icon: Factory,
        to: 'Manufacturing'
    },
    {
        name: "Sales",
        icon: BarChart3,
        to: 'Sales'
    },
]
const variants = {
    expended: {
        width: "300px"
    },
    nonExpended: {
        width: "70px"
    }
}
function NavigationBar({ theme, setTheme, themes }) {
    const Location = useLocation();
    const [activeNavIndex, setActivNavIndex] = useState(0);
    const [isExpanded, setIsExpanted] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsExpanted(window.innerWidth > 700); // Adjust the threshold as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the state based on current window width

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <motion.div
            animate={isExpanded ? "expended" : "nonExpended"}
            variants={variants}
            className={`w-1/5 flex flex-col px-10 py-2  h-screen shadow-lg shadow-black border-r-1 relative ${isExpanded ? "gap-1" : "px-4"}`} >

            {/* arrow of menu */}
            <div
                onClick={() => setIsExpanted(!isExpanded)}
                className='w-6 h-6 rounded-full absolute -right-[10px] top-8 cursor-pointer flex justify-center items-center bg-[#4B5563] text-white'
            >
                {
                    isExpanded ? <ChevronLeft /> : <ChevronRight />
                }
            </div>
            <div className='mt-20 flex flex-col space-y-8'>
                {
                    navLinks.map((item, index) =>
                        <Link
                            to={item.to}
                            key={index}
                            className=
                            {`duration-300 rounded cursor-pointer flex space-x-3 ${isExpanded ? 'p-2' : ' w-max px-2 py-2 justify-center items-center'}`}
                            onClick={() => {
                                setActivNavIndex(index);
                            }}
                            style={activeNavIndex === index ? { background: `#4B5563`, color: '#ffff', fontWeight: 'bold' } : { background: "initial", color: 'black' }}
                        >
                            <item.icon />
                            <span className={`${isExpanded ? 'block' : "hidden"}`}>{item.name}</span>
                        </Link>)
                }
            </div>
            {
                Location.pathname === '/' && activeNavIndex !== 0 ? setActivNavIndex(0) : ""
            }
        </motion.div >
    )
}
export default NavigationBar
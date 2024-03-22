import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BadgeDollarSign } from 'lucide-react'
import Dialog from './Dialog'

// Domy Data
const staticData = [
    {
        name: "Online",
        totalReview: 4000,
        negativeReview: 1000,
        commants: 3900,
        positiveReview: 3000,
    },
    {
        name: "Interview",
        totalReview: 7000,
        negativeReview: 3000,
        commants: 3000,
        positiveReview: 1000,
    },
    {
        name: "PublicData",
        totalReview: 17000,
        negativeReview: 7000,
        commants: 1200,
        positiveReview: 8500,
    },
    {
        name: "Health",
        totalReview: 5000,
        negativeReview: 500,
        commants: 1500,
        positiveReview: 3000,
    },
]

// External Link Handling Component

function External() {
    const [showDialog, setShowDialog] = useState(false);
    const [active, setActive] = useState(0);
    return (
        <>
            <div className='w-full h-[68vh] rounded-lg p-6 flex justify-center bg-[#4B5563]'>
                <div className='h-max flex flex-wrap justify-center gap-5'>
                    {/* CREATE TWO BUTTONS [B2C & B3C] */}
                    <button
                        onClick={() => { setShowDialog(!showDialog); setActive(0) }}
                        className={` duration-300 w-40 h-6 rounded-full p-6 px-10 bg-[#ffff] shadow-lg shadow-black text-black flex justify-between items-center hover:scale-105`}>B2C <BadgeDollarSign />
                    </button>
                    <button
                        onClick={() => { setShowDialog(!showDialog); setActive(1) }}
                        className={` duration-300 w-40 h-6 rounded-full p-6 px-10 bg-[#ffff] shadow-lg shadow-black text-black flex justify-between items-center hover:scale-105`}>B3C <BadgeDollarSign />
                    </button>
                </div>
            </div>
            {/* TOGGLE DIALOG BOX ----> */}
            {
                showDialog && <Dialog data={active === 0 ? { name: 'b2c', staticData } : { name: 'b3c', staticData }} showDialog={showDialog} setShowDialog={setShowDialog} />
            }
        </>
    )
}
export default External
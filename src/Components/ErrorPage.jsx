import React from 'react'
import { Link } from 'react-router-dom'

// Error Page 
function ErrorPage() {
    return (
        <div className=" p-5 flex flex-col justify-center items-center min-h-screen bg-gray-100 w-full sm:items-center sm:p-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#4B5563]"><span className=' text-orange-400'>404</span> - Page Not Found</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
            <Link onClick={() => {
            }} to="/" className="px-6 py-3 bg-[#4B5563] text-white rounded-md hover:bg-[#54606f] transition duration-300 ease-in-out">Go to Research</Link>
        </div>
    )
}

export default ErrorPage
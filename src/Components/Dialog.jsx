import { X } from 'lucide-react';
import React from 'react'
import Card from './Card';
import '../App.css'
const Dialog = ({ showDialog, setShowDialog, data }) => {
  return (
    <>
      <div
        className="py-10 h-screen fixed inset-0 z-50 overflow-hidden bg-gray-500 bg-opacity-75 flex items-center justify-center"
      >
        <div
          className="relative bg-white overflow-hidden shadow-xl sm:max-w-4xl w-full mx-10 h-full p-5"
        >
          <div className="absolute right-4 top-3 ">
            <button
              onClick={() => setShowDialog(!showDialog)}
              className='duration-300 p-2 bg-[#4B5563] rounded-full text-white hover:bg-[#4b5563bd] hover:rotate-180'>
              <X />
            </button>
          </div>
          <div className="px-4 py-2 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              {data.name.toUpperCase()}
            </h3>
          </div>
          <div className=' min-h-max max-h-full justify-center flex flex-wrap gap-5  mt-5 overflow-y-scroll pt-5 pb-16'>
            {
              data.staticData.map((ele, index) => <Card key={index} data={ele} />)
            }

          </div>

        </div>
      </div>

    </>
  );
};

export default Dialog
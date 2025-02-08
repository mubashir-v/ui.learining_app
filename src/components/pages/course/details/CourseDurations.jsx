import React from 'react'
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom';

function CourseDurations() {
  return (
      <div className="hidden md:flex md:flex-1 md:h-full pl-8 pr-8 py-6 md:pr-6 md:py-6 md:pl-6 ">
            <div className="flex flex-col w-full md:h-full border rounded-lg shadow-lg">
              <div className="h-24 w-full p-2">
                <div className="flex flex-col p-6 justify-center h-full w-full border-2 border-black  rounded-lg bg-blue-800">
                  <p className="text-white  text-md">Course Fee:</p>
                  <p className="text-white text-right font-bold text-2xl">
                    Free !
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="p-4">
                  <p className="text-md font-bold">Course includes:</p>
                </div>
  
                <div className="h-16 w-full p-2">
                  <div className="w-full h-full border-b flex items-center gap-6 justify-center p-4">
                    <IoMdTimer className="text-xl text-gray-400 " />{" "}
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-sm text-gray-400">:</p>
                    <p className="text-sm text-gray-400">4hr</p>
                  </div>
                </div>
  
                {/* .. */}
  
                <div className="h-16 w-full p-2">
                  <div className="w-full h-full border-b flex items-center gap-6 justify-center p-4">
                    <IoMdTimer className="text-xl text-gray-400 " />{" "}
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-sm text-gray-400">:</p>
                    <p className="text-sm text-gray-400">4hr</p>
                  </div>
                </div>
  
                {/*  */}
  
                <div className="h-16 w-full p-2">
                  <div className="w-full h-full border-b flex items-center gap-6 justify-center p-4">
                    <IoMdTimer className="text-xl text-gray-400 " />{" "}
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-sm text-gray-400">:</p>
                    <p className="text-sm text-gray-400">4hr</p>
                  </div>
                </div>
                {/*  */}
  
                <div className="h-16 w-full p-2">
                  <div className="w-full h-full border-b flex items-center gap-6 justify-center p-4">
                    <IoMdTimer className="text-xl text-gray-400 " />{" "}
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-sm text-gray-400">:</p>
                    <p className="text-sm text-gray-400">4hr</p>
                  </div>
                </div>
              </div>
              <div className="flex-1  ">
                <Link to={"/course/:course-slug/learning-path"} className="flex flex-col items-center justify-end h-full  w-full p-4">
                  <div  className="flex items-center bg-yellow-400  justify-center h-14 w-full border-2 border-black rounded-full">
                    <p className="text-lg font-bold">Start Course</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
  )
}

export default CourseDurations
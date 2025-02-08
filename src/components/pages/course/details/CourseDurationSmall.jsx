import React from 'react'
import { IoMdTimer } from "react-icons/io";

function CourseDurationSmall() {
  return (
        <div className="p-2 md:hidden">
          <div className="w-full  md:h-full border rounded-lg shadow-lg">
            <div className="h-24 w-full p-2">
              <div className="flex flex-col p-6 justify-center h-full w-full border-2 border-black rounded-lg bg-blue-800">
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
            <div className="flex flex-col items-center justify-end h-full  w-full p-6">
              <div className="flex items-center bg-yellow-400  justify-center h-12 w-full border-2 border-black rounded-full">
                <p className="text-md font-bold">Start Course</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CourseDurationSmall
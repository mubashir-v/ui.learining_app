import React from "react";
import image from "../../assets/image/image.png";
import { CiPlay1 } from "react-icons/ci";
function Banner() {
  return (
    <div className="border w-full">
      <div className="w-full h-full  bg-gradient-to-tl from-blue-100 to-rose-50 ">
        <div className="flex w-full pt-12 ">
          <div className="flex flex-1 ">
            <div className="flex flex-col w-full md:w-2/3 h-full md:ml-8 p-8">
              <p className="text-3xl md:text-7xl text-black font-bold  ">
                Build Your Career Path from Scratch{" "}
              </p>
              <div className="flex h-full w-full justify-end">
                <div className="flex w-2/3 md:w-1/2 items-center justify-center">
                  <div className="flex md:gap-2 hover:bg-blue-700 cursor-pointer items-center justify-center text-white h-8 md:h-12 border md:w-72 w-36 bg-blue-800 rounded-lg shadow-md">
                    <CiPlay1 />{" "}
                    <p className="md:text-xl text-[8px]">Browse Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <img className="md:w-96 w-60" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import courseHeader from "../../assets/image/courseHeader.png";
import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";
function CourseCard() {
  return (
    <div className="flex h-72 md:h-96 w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6 items-center justify-center p-1 md:p-2 ">
      <Link
        to={"/course/course-slug"}
        className="h-full w-full border rounded-lg shadow-lg bg-white  overflow-hidden hover:shadow-sm hover:shadow-black"
      >
        <div className="flex flex-col h-full w-full ">
          {/* Top Section */}
          <div className="w-full h-2/4 bg-slate-50 p-2 md:p-4 ">
            <img src={courseHeader} />
          </div>

          {/* Circle (Half in top, half in bottom) */}
          {/* <div className="absolute flex items-center justify-center left-5 md:left-12 top-[15%] border bg-white transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full">
            <IoCodeSlash className="text-3xl text-blue-500" />
          </div> */}

          {/* Bottom Section */}
          <div className="flex-1 bg-white px-1.5 md:px-4 mb-1">
            <div className="flex w-full h-8 ">
              <div className="h-full w-1/2 p-1">
                <div className="flex items-center justify-center bg-gray-100 w-full h-full rounded-full">
                  <p className="text-[9px] md:text-xs ">Career Path</p>
                </div>
              </div>
              <div className="flex items-center justify-end h-full w-1/2 px-2">
                <p className="text-black font-bold md:text-xs text-[10px]">5.5 Rating</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col w-full mt-5">
              <p className="text-black font-bold text-xs md:text-xl">
                Bridge to industry
              </p>
              <p className="text-gray-500 pl-2 text-[8px] md:text-[12px]">
                Become Zero to here
              </p>
            </div>

            <div className="flex w-full h-10 md:mt-6 p-2 justify-between">
              <div className="flex w-1/2 md:w-1/3 rounded-full h-full bg-blue-800 hover:bg-blue-700 items-center justify-center cursor-pointer">
                <p className="text-white xl:text-[10px] text-[8px]">Details</p>
              </div>

              <div className="flex w-1/3  h-full  items-center justify-center">
                <p className="text-black font-bold md:text-sm text-[8px]">Free !</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;

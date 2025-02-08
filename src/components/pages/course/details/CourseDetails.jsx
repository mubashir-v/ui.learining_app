import React from "react";
import { CiStar } from "react-icons/ci";
import courseImage from "../../../../assets/image/courseImagedetails.png";
import Description from "./Description";
import CourseDurations from "./CourseDurations";

function CourseDetails() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col md:flex-row w-full md:h-full">
        <div className="w-full lg:w-3/4 h-full md:overflow-y-auto scrollbar-hidden">
          <div className="flex flex-col w-full items-center justify-center px-8 pt-4 md:pt-6 md:px-9">
            <img className="rounded-lg" src={courseImage} />
            <div className="flex flex-col w-full  p-4">
              <div className="flex h-6 md:h-8 w-full gap-2">
                <div className="flex  w-1/3 lg:w-2/12 h-full bg-gray-300 rounded-full items-center justify-center">
                  <p className="text-black text-xs md:text-sm  font-semibold">
                    Career Path
                  </p>
                </div>
                <div className="flex w-1/2 lg:w-2/12  items-center h-full ">
                  <p className="flex flex-row items-center gap-2 text-gray-600  text-xs md:text-sm">
                    <CiStar /> ( 5 Rating )
                  </p>
                </div>
              </div>
              <div className="flex h-12 md:h-24 w-full items-center">
                <p className="font-bold text-lg md:text-xl lg:text-5xl">
                  Bridge to Industry
                </p>
              </div>
            </div>
          </div>
          <Description />
        </div>
        <CourseDurations />
      </div>
    </div>
  );
}

export default CourseDetails;

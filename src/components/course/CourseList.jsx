import React from "react";
import CourseCard from "./CourseCard";

function CourseList() {
  return (
    <div className="w-full p-4">
      <div className="w-full h-20 p-8">
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-lg font-bold text-gray-600">
          Courses
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  w-full ">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  );
}

export default CourseList;

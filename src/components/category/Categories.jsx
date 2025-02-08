import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { GiPencilBrush } from "react-icons/gi";
import CategoryItem from "./CategoryItem";
function Categories() {
  return (
    <>
      {" "}
      <div className="flex h-14 w-full py-8">
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-xl font-bold text-gray-600">
            Top Category We Have
          </p>
        </div>
      </div>
      <div className="h-32 mt-6 w-full mb-5">
        <div className="flex h-full gap-4 md:gap-10 w-full justify-center items-start overflow-x-scroll scrollbar-hidden">
            <CategoryItem icon={IoCodeSlash}/>
            <CategoryItem icon={GiPencilBrush}/>
            <CategoryItem icon={IoCodeSlash}/>
            <CategoryItem icon={GiPencilBrush}/>
          
        </div>
      </div>
    </>
  );
}

export default Categories;

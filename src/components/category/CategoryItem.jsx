import React from "react";

function CategoryItem({ icon: Icon }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-14  md:w-20">
      <div className="flex cursor-pointer  hover:bg-slate-50 items-center justify-center w-14 h-14 md:h-20 border md:w-20 rounded-full">
        <Icon className="md:text-3xl font-bold text-blue-600" />
      </div>
      <div className="flex  md:h-10 w-full items-center justify-center">
        <p className=" text-[8px] md:text-xs text-center text-gray-500">Web development</p>
      </div>
    </div>
  );
}

export default CategoryItem;

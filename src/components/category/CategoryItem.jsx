import React from "react";

function CategoryItem({ icon: Icon }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-20">
      <div className="flex cursor-pointer  hover:bg-slate-50 items-center justify-center h-20 border w-20 rounded-full">
        <Icon className="text-3xl font-bold text-blue-600" />
      </div>
      <div className="flex h-10 w-full items-center justify-center">
        <p className="text-xs text-center text-gray-500">Web development</p>
      </div>
    </div>
  );
}

export default CategoryItem;

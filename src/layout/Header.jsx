import React from "react";
import { SiFuturelearn } from "react-icons/si";
function Header() {
  return (
    <div className="flex h-14 w-full border">
      <div className="flex flex-row w-full gap-2 h-full pl-4">
        <div className="flex flex-row flex-1 items-center">
          <div className="flex gap-2 cursor-pointer">
            <SiFuturelearn className="text-3xl text-blue-900" />
            <p className="text-blue-900 text-2xl font-bold"> BaseCodes</p>
          </div>
          <div className="flex h-full flex-1 justify-end items-center ">
            <div className="flex items-center justify-center h-full">
              <div className="hover:bg-slate-200 md:text-lg text-xs h-full flex items-center px-2 md:px-8 cursor-pointer">
                Home
              </div>
              <div className="hover:bg-slate-200 md:text-lg text-xs h-full flex items-center px-2 md:px-8 cursor-pointer">
                Courses
              </div>
              <div className="hover:bg-slate-200 md:text-lg text-xs h-full flex items-center px-2 md:px-8 cursor-pointer">
                My Learnings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

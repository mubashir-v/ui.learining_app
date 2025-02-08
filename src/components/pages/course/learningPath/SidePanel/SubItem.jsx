import React from "react";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function SubItem() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    handleOpen(1);
  }, []);
  return (
    <div className="flex flex-col ml-2">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex w-full h-8 md:h-10 border  bg-white items-center px-4 justify-between">
            <p className="text-gray-500 text-xs md:text-xs">Introduction</p>
            <Icon id={1} open={open} />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            What is web 
          </div>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            How works
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            How develop?
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex w-full h-8 md:h-10 border  bg-white items-center px-4 justify-between">
            <p className="text-gray-500 text-xs md:text-xs">Front End Development</p>
            <Icon id={2} open={open} />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
           Introduction to front end
          </div>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            HTML
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            CSS
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            JS
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Frame works intro
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            React JS 
          </div>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex w-full h-8 md:h-10 border  bg-white items-center px-4 justify-between">
            <p className="text-gray-500 text-xs md:text-xs">Backend Development</p>
            <Icon id={3} open={open} />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
           Introduction to Backend
          </div>
          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Python
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            C#
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Java
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Backend Service (Frame work)
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Routes
          </div>

          <div className="flex w-full pl-4 py-1  px-4 border-b hover:bg-slate-50 text-gray-400 cursor-pointer">
            Requests
          </div>
        </AccordionBody>
      </Accordion>
      
    </div>
  );
}

export default SubItem;

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 26"
      strokeWidth={2}
      stroke="currentColor"
      className={` ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

import React from "react";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SubItem from "./SubItem";
function MainItem() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    handleOpen(1);
  }, []);
  return (
    <div className="flex flex-col">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex w-full h-10 md:h-12 border bg-slate-50 p-4 justify-between">
            <p className="text-gray-500 text-xs md:text-sm"> Web Development</p>
            <Icon id={1} open={open} />
          </div>
        </AccordionHeader>
        <AccordionBody>
         <SubItem/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex w-full h-10 md:h-12 border bg-slate-50 p-4 justify-between">
            <p className="text-gray-500 text-xs md:text-sm"> Data Engineering</p>
            <Icon id={2} open={open} />
          </div>
        </AccordionHeader>
        <AccordionBody>
         <SubItem/>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default MainItem;

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

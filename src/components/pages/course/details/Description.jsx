import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import CourseDurationSmall from "./CourseDurationSmall";
function Description() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    handleOpen(1);
  }, []);
  return (
    <div className="px-8 w-full md:pb-6">
      <div className="w-full border rounded-lg p-6 shadow-md">
        <p className=" text-md md:text-lg font-bold">Course Description</p>
        <p className="mt-3 text-sm text-gray-400">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.dolor sit amet, consectetur adipiscing elited do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="text-md md:text-lg mt-3 font-bold">
          What you'll learn in this course?
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
        </p>

        <ul className="list-disc mt-4 mb-4 ml-8 text-xs md:text-sm text-gray-400">
          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>

          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li className="mt-2">
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
        <div className="">
          <p className="text-black font-semibold text-md md:text-lg">
            Course Content
          </p>
        </div>
        <div className="flex flex-col gap-4 my-2 p-2">
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div className="flex w-full h-10 md:h-12 border rounded-t-lg bg-slate-100 p-4 justify-between">
                <p className="text-gray-500 text-xs md:text-sm">
                  {" "}
                  Introduction
                </p>
                <Icon id={1} open={open} />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full  p-4 border rounded-b-lg">
                <ul className="list-disc mt-4 mb-4 ml-8 text-xs md:text-sm text-gray-400">
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="flex w-full h-10 md:h-12 border rounded-t-lg bg-slate-100 p-4 justify-between">
                <p className="text-gray-500 text-xs md:text-sm">
                  {" "}
                  Introduction
                </p>
                <Icon id={2} open={open} />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full  p-4 border rounded-b-lg">
                <ul className="list-disc mt-4 mb-4 ml-8 text-xs md:text-sm text-gray-400">
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div className="flex w-full h-10 md:h-12 border rounded-t-lg bg-slate-100 p-4 justify-between">
                <p className="text-gray-500 text-xs md:text-sm">
                  {" "}
                  Introduction
                </p>
                <Icon id={3} open={open} />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full  p-4 border rounded-b-lg">
                <ul className="list-disc mt-4 mb-4 ml-8 text-xs md:text-sm text-gray-400">
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="mt-2">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <CourseDurationSmall />
      </div>
    </div>
  );
}

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

export default Description;

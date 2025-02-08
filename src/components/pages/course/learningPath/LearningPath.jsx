import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoMenuOutline } from "react-icons/io5";
import MainItem from "./SidePanel/MainItem";
function LearningPath() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full w-full">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Course Details */}
        <div className="w-full md:w-3/4 md:h-full  md:overflow-y-auto scrollbar-hidden">
          <div className="md:hidden w-full h-8">
            <div className="flex h-full w-full items-center justify-end px-6">
              <div className="text-2xl" onClick={() => setIsOpen(true)}>
                <IoMenuOutline />
              </div>
            </div>
          </div>
          {/* Session */}
          <div className="h-64 md:h-[500px] w-full mt-4 px-4 ">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BGKzRc0yKRo?si=C0kUBMCjz_8_QLBX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* Session */}
          {/* Session Title */}
          <div className="flex items-center justify-between md:h-14 h-10 p-4 w-full">
            <p className="md:text-xl text-md font-semibold">
              # 1.0 - Introduction
            </p>
            <p className="md:text-sm  text-xs text-gray-500 ">21 mins</p>
          </div>
          {/* Session Title */}
          {/* nav */}
          <div className="flex gap-4 md:h-20 h-16 p-4 w-full">
            <div className="flex items-center text-black bg-blue-600 font-semibold justify-center h-full rounded-full border md:w-32 w-24 md:text-md text-xs">
              Notes
            </div>
            <div className="flex items-center text-gray-400 font-semibold justify-center h-full rounded-full border md:w-32 w-24 md:text-md text-xs">
              FAQ
            </div>
            <div className="flex items-center text-gray-400 font-semibold justify-center h-full rounded-full border md:w-32 w-24 md:text-md text-xs">
              Reviews
            </div>
          </div>

          {/* nav */}

          {/* Module Note */}
          <div className="w-full p-4">
            <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto scrollbar-hidden flex flex-col border rounded-lg   w-full p-4">
              {/* Main Heading */}
              <div className="py-2">
                <p className=" text-md md:text-xl font-bold">
                  Course Curriculum
                </p>
              </div>{" "}
              {/* Main Heading END */}
              {/*  Heading 1 */}
              <div className="">
                <p className="px-2 py-1 text-sm md:text-lg font-bold text-gray-800">
                  Code Explanation
                </p>
              </div>{" "}
              {/*  Heading 1 END */}
              {/*  Heading 2 */}
              <div className="">
                <p className="px-3 py-1 text-xs md:text-md font-bold text-gray-800">
                  Option 1
                </p>
              </div>{" "}
              {/*  Heading 2 END */}
              {/* Normal Text */}
              <div className="w-full px-4 py-1">
                <p className="text-gray-600 md:text-sm text-xs">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                </p>
              </div>
              {/* Normal Text END */}
              {/*  Heading 2 */}
              <div className="">
                <p className="px-3 py-1 text-xs md:text-md font-bold text-gray-800">
                  Option 1
                </p>
              </div>{" "}
              {/*  Heading 2 END */}
              {/* Normal Text */}
              <div className="w-full px-4 py-1">
                <p className="text-gray-600 md:text-sm text-xs">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                </p>
              </div>
              {/* Normal Text END */}
              <div className="">
                <p className="px-3 py-1 text-xs md:text-md font-bold text-gray-800">
                  Option 2
                </p>
              </div>{" "}
              {/*  Heading 2 END */}
              {/* Normal Text */}
              <div className="w-full px-4 py-1">
                <p className="text-gray-600 md:text-sm text-xs">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                </p>
              </div>
              {/* Normal Text END */}
              {/* Code Block */}
              <div className="w-full px-4 py-1">
                <div className="w-full border p-1 md:text-sm text-xs">
                  <div className="w-full md:h-6 h-4 flex items-center justify-end px-1">
                    <p className="md:text-sm text-xs text-gray-400">Home.jsx</p>
                  </div>
                  <SyntaxHighlighter language={"jsx"} style={github}>
                    {`import { useState } from "react";
                    import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
                    import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

                    const CodeBlock = ({ code, language }) => {
                      const [copied, setCopied] = useState(false);

                      const handleCopy = async () => {
                        try {
                          await navigator.clipboard.writeText(code);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
                        } catch (err) {
                          console.error("Failed to copy: ", err);
                        }
                      };

                      return (
                        <div style={{ position: "relative", borderRadius: "5px", overflow: "hidden" }}>
                          <button
                            onClick={handleCopy}
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              background: "#333",
                              color: "#fff",
                              border: "none",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontSize: "12px"
                            }}
                          >
                            {copied ? "Copied!" : "Copy"}
                          </button>
                          <SyntaxHighlighter language={language} style={atomOneDark}>
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      );
                    };

                    export default function App() {
                      const sampleCode = 'const hello = "Hello, World!"; console.log(hello);';

                      return <CodeBlock code={sampleCode} language="javascript" />;
                    }

                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              {/* Code Block END */}
              {/* image Note  */}
              <div className="w-full p-4">
                <div className="border p-2">
                  <div className="border p-2">
                    <img src="https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2021/08/20/Figure-1.-Document-processing-architectural-diagram.png" />
                  </div>
                </div>
                <p className="text-xs p-1 text-gray-400 w-full text-center">
                  Caption
                </p>
              </div>
              {/* image Note END */}
            </div>
          </div>
          {/* Module Note */}
        </div>
        {/* Course Details END */}

        {/* Sylubus List */}
        <div className="hidden md:flex flex-col w-full md:w-1/4 md:h-full border-l p-">
        <MainItem/>
        </div>
        {/* Sylubus List */}

        {/* Sylubus List small scrn */}
        <div
          className={`fixed top-0 right-0 h-full w-96 bg-white border-l shadow-md transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex w-full h-8">
            <div
              className="flex items-center justify-center w-8 h-full border rounded "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </div>
          </div>

          <MainItem/>
        </div>
        {/* Sylubus List List small scrn  END */}
      </div>
    </div>
  );
}

export default LearningPath;

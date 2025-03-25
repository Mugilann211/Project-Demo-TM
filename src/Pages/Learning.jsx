import React, { useState, useEffect } from "react";
import Python from "../components/coursebar/Python";
import chapterData from "../data/chapterData";
import chapter from "../assets/c1.png";
import down from "../assets/down.png";
import rarr from "../assets/rarr.png";
import exp from "../assets/expand.png";
import notes from "../assets/notesbut.png";
import robo from "../assets/robo2.png";
import green from "../assets/tickg.png";

const Learning = () => {
  const [isTestVisible, setIsTestVisible] = useState(false);
  const [count, setCount] = useState(0); // Track number of completed chapters
  const [completedChapters, setCompletedChapters] = useState([]); // Stores completed chapter contents
  const [timer, setTimer] = useState(30);
  const [popupContent, setPopupContent] = useState("");
  const [expandSource, setExpandSource] = useState("");
  const [isExpandPopupOpen, setIsExpandPopupOpen] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isTestVisible) {
      setTimer(30);
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            alert("Time's up! Review the chapter.");
            setIsTestVisible(false);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isTestVisible]);

  // Handle Next button click → Show test for current chapter
  const handleNextClick = () => {
    setIsTestVisible(true);
    setTimer(30);
  };

  const openExpandPopup = (content, source) => {
    console.log("Opening Popup:", content); // Debugging Log
    setPopupContent(content);
    setExpandSource(source);
    setIsExpandPopupOpen(true);
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    const currentChapter = chapterData[count];

    if (answer === currentChapter.question.correctAnswer) {
      // Move current chapter to completed list
      setCompletedChapters((prev) => [...prev, currentChapter.content]);

      // Check if it's the last question
      if (count < chapterData.length - 1) {
        setCount(count + 1);
        setIsTestVisible(false); // Hide test for next chapter
      } else {
        alert("You completed all the chapters! Restarting...");
        // Reset states to restart
        setCount(0);
        setCompletedChapters([]);
        setIsTestVisible(false);
      }
    } else {
      alert("Wrong answer! Review the chapter.");
      setIsTestVisible(false);
    }
  };

  const formattedPopupContent = Array.isArray(popupContent)
    ? popupContent
    : popupContent.split("\n").filter((item) => item.trim() !== "");

  return (
    <>
      <Python />

      {/* Side Course - Chapters */}
      <div className="side-course bg-gray-100 gap-5 font-['Poppins'] p-4 flex shadow-lg text-[#2761F6]">
        <h1 className="text-md">Chapter No</h1>
        {chapterData.map((chapterItem) => (
          <div
            key={chapterItem.id}
            className="flex border rounded-md w-[91px] h-[33px] bg-[#E1EAFF] shadow-lg items-center cursor-pointer"
          >
            <img src={chapter} alt="" className="ml-1" />
            <p className="ml-3">{chapterItem.id}</p>
            <img src={rarr} alt="" className="ml-5" />
          </div>
        ))}
      </div>

      {/* Chapter Content */}
      {!isTestVisible && (
        <div className="w-full h-full flex flex-col font-['Poppins']">
          {/* ✅ Expand Popup */}
          {isExpandPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-[#FAFAFA] relative p-6 border-[1px] border-[#FF00E5] ml-10 mt-[-20px] w-[1270px] h-[420px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]">
                <h2 className="text-lg font-['Poppins']">{expandSource}</h2>

                {formattedPopupContent.length > 1 ? (
                  <ul className="pl-5 mt-4 space-y-6">
                    {" "}
                    {/* Removes default bullets & adds spacing */}
                    {formattedPopupContent.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {" "}
                        {/* Align image & text */}
                        <img
                          src={green}
                          alt="Completed"
                          className="w-[20px] h-[20px]"
                        />
                        <span className="flex ">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4">{popupContent}</p> // Show as text if only one item
                )}

                <img
                  src={exp}
                  alt="Expand"
                  className="top-2 right-0 w-[30.8px] h-[30px] absolute cursor-pointer"
                  onClick={() => setIsExpandPopupOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Completed chapters in divone */}
          <div className="ans flex relative mt-2 ml-5 w-[1280px] h-[265px] border-[1px] border-[#AE58FF] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]">
            <div className="divone flex mt-5 gap-4 flex-col font-['Poppins'] ml-5 w-[1270px]">
              {completedChapters.map((content, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={green}
                    alt="Completed"
                    className="w-[20px] h-[20px]"
                  />
                  <p>{content}</p>
                </div>
              ))}
            </div>

            <img
              src={exp}
              alt="Expand"
              className="ml-[-10px] top-2 right-0 w-[30.8px] h-[30px] absolute cursor-pointer"
              onClick={() =>
                openExpandPopup(
                  completedChapters.join("\n"),
                  "Completed Chapters"
                )
              }
            />
            <img src={notes} alt="" className="w-[30.8px] h-[30px] mt-[40px]" />
          </div>

          {/* Current chapter in divtwo */}
          <div className="robo w-[1280px] h-[235px] relative border-[1px] border-[#AE58FF] shadow-[0px_0px_15px_rgba(0,0,0,0.3)] mt-3 ml-5">
            <img src={robo} alt="" className="absolute ml-[-14px] mt-[-13px]" />
            <div className="divtwo mt-5 font-['Poppins'] ml-7 w-[1230px]">
              <p>{chapterData[count]?.content}</p>
            </div>
            <img
              src={exp}
              alt="Expand"
              className="w-[30.8px] h-[30px] ml-[1240px] top-2 right-0 absolute cursor-pointer"
              onClick={() =>
                openExpandPopup(chapterData[count]?.content, "Current Chapter")
              }
            />
            <img
              src={notes}
              alt=""
              className="w-[30.8px] h-[30px] ml-[1240px] top-10 right-0 absolute"
            />
          </div>
        </div>
      )}

      {/* Test Div (only visible after clicking Next) */}
      {isTestVisible && (
        <div className="flex flex-col w-auto h-auto font-['Poppins']">
          <div className="test flex flex-col mt-2 ml-5 w-[1280px] h-[310px] rounded-md border-[0.68px] border-[#D6D6D6]">
            <div className="flex mt-3 w-[100px] h-[35px] rounded-md bg-gradient-to-r from-[#FF6969] to-[#C682FB] ml-3">
              <p className="pl-3 pt-1 text-white">True/False</p>
            </div>

            <div className="flex w-full ml-10 mt-6">
              <p className="text-md font-Poppins text-center whitespace-nowrap">
                {chapterData[count].question.text}
              </p>
            </div>

            {/* Countdown Timer Display */}
            <div className="count w-[75px] h-[75px] ml-[1170px] mt-[100px] rounded-full flex bg-gray-200 items-center justify-center">
              <p className="text-[30px] font-normal">{timer}</p>
            </div>
          </div>

          <div className="flex w-[1280px] h-[17px] rounded-md mt-2 ml-5 bg-gray-300">
            <div
              className="count2 rounded-md bg-gradient-to-r from-[#E65E5E] via-[#D8AA7F] via-[#C3D563] to-[#99DE64]"
              style={{
                width: `${(timer / 30) * 100}%`,
                transition: "width 1s linear",
              }}
            ></div>
          </div>

          {/* Answer Buttons */}
          <div className="flex w-[1280px] h-[165px] gap-4 rounded-md mt-2 ml-5 border-[0.68px] border-[#D6D6D6]">
            <button
              className="w-[78.8px] h-[27px] text-[#A16DCA] border-[1.78px] border-[#9067EF] mt-12 ml-12 cursor-pointer"
              onClick={() => handleAnswer(true)}
            >
              True
            </button>
            <button
              className="w-[78.8px] h-[27px] text-[#A16DCA] border-[1.78px] border-[#9067EF] mt-12 cursor-pointer"
              onClick={() => handleAnswer(false)}
            >
              False
            </button>
          </div>
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="bg-gradient-to-r from-[#B37FEB] to-[#B45EFF] w-[80px] h-[31px] font-['Poppins'] rounded-md shadow-lg text-[#FFFFFF] mt-[530px] ml-[-80px]"
      >
        Next
      </button>
    </>
  );
};

export default Learning;

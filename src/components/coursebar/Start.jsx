import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import robot from "../../assets/robo.png"; 
const Start = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleYesClick = () => {
    setShowPopup(false); // Close the popup
    navigate("/learning"); // Navigate to Learning page
  };

  return (
    <>
      {/* Main Start Component */}
      <div className="flex justify-between w-[1430px]">
        <div className="bg mt-3">
          <p className="ml-2">Python Course</p>
        </div>

        <div>
          <button
            onClick={() => setShowPopup(true)}
            className="but1 mt-3 shadow-md bg-[rgba(160,109,226,0.70)]"
          >
            Start Learning
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[400px] h-[200px] rounded-lg shadow-xl bg-white">
            {/* Robot Image Positioned at the Top-Left */}
            <img
              src={robot}
              alt="robot"
              className="absolute -top-10 -left-10 w-28 h-28 z-50"
            />

            {/* First Div: Gradient Background with Text */}
            <div className="text-lg font-semibold text-white bg-gradient-to-r from-[#7B8CFE] to-[#C26BF0] p-6 rounded-t-lg">
              <p className="text-center">
                You're about to begin your learning journey! Dive in, explore,
                and enhance your knowledge. Let's get started!
              </p>
            </div>

            {/* Second Div: White Background for Button */}
            <div className="bg-white p-6 flex justify-center rounded-b-lg">
              <button
                onClick={handleYesClick}
                className="px-4 py-2 border rounded-md text-[#7B8CFE] border-[#7B8CFE] hover:bg-[#7B8CFE] hover:text-white transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Start;

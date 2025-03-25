import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import robot from "../../assets/robo.png";
const Start = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setShowPopup(false);
    navigate("/learning");
  };

  return (
    <>
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
        <div className="fixed inset-0 flex font-['Poppins'] items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[500px] h-[200px] rounded-lg shadow-xl bg-white">
            <img
              src={robot}
              alt="robot"
              className="absolute -top-10 -left-10 w-28 h-28 z-50"
            />

            <div className="text-lg text-white bg-gradient-to-r from-[#7B8CFE] to-[#C26BF0] p-6 rounded-t-lg">
              <p className="text-center ml-7">
                You're about to begin your learning journey! Dive in, explore,
                and enhance your knowledge. Let's get started!
              </p>
            </div>

            <div className="bg-white p-6 flex justify-center rounded-b-lg">
              <button
                onClick={handleYesClick}
                className="px-4 py-2 border font-['Poppins'] rounded-md text-[#7B8CFE] border-[#7B8CFE] hover:bg-[#7B8CFE] hover:text-white transition"
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

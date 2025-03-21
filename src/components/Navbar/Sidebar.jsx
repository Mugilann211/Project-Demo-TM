import React from "react";
import prog from "../../assets/progress.png";
import sat from "../../assets/statistics.png";
import note from "../../assets/notes.png";
import pen from "../../assets/pen.png";

const Sidebar = () => {
  return (
    <nav>
      <div className="cursor-pointer">
        <div className="">
          <img
            className="w-[43px] h-[35px] ml-3 mt-5 mb-o"
            src={prog}
            alt="Progress"
          />
          <p className="ml-2">Progress</p>
        </div>

        <div className="">
          <img
            className="w-[43px] h-[35px] ml-3 mt-5 mb-o"
            src={sat}
            alt="statistics"
          />
          <p className="ml-2">Statistics</p>
        </div>

        <div className="">
          <img
            className="w-[43px] h-[35px] ml-3 mt-5 mb-o"
            src={note}
            alt="notes"
          />
          <p className="ml-3">Notes</p>
        </div>

        <div className="">
          <img
            className="w-[43px] h-[35px] ml-3 mt-5 mb-o"
            src={pen}
            alt="highlights"
          />
          <p className="mr-0">Highlights</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

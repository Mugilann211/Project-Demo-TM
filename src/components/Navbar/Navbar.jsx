import React from "react";
import logo from "../../assets/company_logo.png";
import toggle from "../../assets/Toggle icon.png";
import home from "../../assets/home icon.png";
import file from "../../assets/file icon.png";
import box from "../../assets/box icon.png";
import profile from "../../assets/profile icon.png";
import log from "../../assets/log icon.png";


const Navbar = () => {
  return (
    
      <nav>

        <div className="flex justify-between items-center bg-[#F8F8F8] pb-2 border-b-[3px]">

          <div className="mt-1 cursor-pointer">

            <img src={logo} alt="logo" />

          </div>

          <div className="flex cursor-pointer items-center gap-5 mr-5">

            <img src={toggle} alt="toggle" />
            <img src={home} alt="home" />
            <img src={file} alt="file" />
            <img src={box} alt="box" />
            <img src={profile} alt="profile" />
            <img src={log} alt="log" />

          </div>

        </div>

      </nav>
  );
};

export default Navbar;

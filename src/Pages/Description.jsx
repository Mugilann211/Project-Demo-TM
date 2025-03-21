import React from "react";
import Start from "../components/coursebar/Start";
import Home from "../components/home/Home";

const Description = () => {
  return (
    <>
      <div class="div2">
        <Start />
      </div>

      <div class="div4 bg-[rgba(179,200,255,0.24)] overflow-y-auto overflow-x-hidden">
        <Home />
      </div>
    </>
  );
};

export default Description;

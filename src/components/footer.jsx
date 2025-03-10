import React from "react";
import { PiGitForkBold } from "react-icons/pi";
const Footer = () => {
  return (
    <div id="footer" className=" pt-10  pb-5 ">
      <div className=" xl:w-1/2 flex m-auto justify-around gap-x-3">
        <div className="flex flex-col items-center gap-y-2 flex-wrap">
          <p className="text-center text-white font-bold text-2xl">
            Designed and developed by <br></br>{" "}
            <span className="bluegradient">Ritik Patidar</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2 flex-wrap"></div>
      </div>
    </div>
  );
};

export default Footer;

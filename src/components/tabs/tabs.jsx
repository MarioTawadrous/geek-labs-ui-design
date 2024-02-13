import { useState } from "react";
import Trading from "../tabs/trading/trading";
import Automation from "../tabs/automation/automation";
import Portfolio from "../tabs/portfolio/portfolio";
import Alerts from "./alerts/alerts";
import Training from "../tabs/training/training";

function Tabs() {
  const [openTab, setOpenTab] = useState(4);

  return (
    <>
      <div className="">
        {/* // navigation */}
        <div className="grid justify-items-center p-1 bg-black mx-4  rounded-md font-bold font-inter">
          <ul className=" flex p-1 text-white  lg:text-[48px] sm:text-[25px] gap-1">
            <li
              onClick={() => setOpenTab(1)}
              className={` ${openTab === 1 ? " text-white" : "text-[#4848484D]"}  px-4  rounded`}
            >
              Trading
            </li>
            <span className="font-light text-[#B9B9B9]">|</span>
            <li
              onClick={() => setOpenTab(2)}
              className={` ${openTab === 2 ? " text-white" : "text-[#4848484D]"}  px-4 rounded`}
            >
              Automation
            </li>
            <span className="font-light text-[#B9B9B9]">|</span>
            <li
              onClick={() => setOpenTab(3)}
              className={` ${openTab === 3 ? " text-white" : "text-[#4848484D]"}  px-4 rounded`}
            >
              Portfolio
            </li>
            <span className="font-light text-[#B9B9B9]">|</span>
            <li
              onClick={() => setOpenTab(4)}
              className={` ${openTab === 4 ? " text-white" : "text-[#4848484D]"}  px-4 rounded font-inter`}
            >
              Alerts
            </li>
            <span className="font-light text-[#B9B9B9]">|</span>
            <li
              onClick={() => setOpenTab(5)}
              className={` ${openTab === 5 ? " text-white" : "text-[#4848484D]"}  px-4  rounded`}
            >
              Training
            </li>
          </ul>
        </div>

        {/* tabs goes here */}
        {openTab === 1 && <Trading />}
        {openTab === 2 && <Automation />}
        {openTab === 3 && <Portfolio />}
        {openTab === 4 && <Alerts />}
        {openTab === 5 && <Training />}
      </div>
    </>
  );
}

export default Tabs;

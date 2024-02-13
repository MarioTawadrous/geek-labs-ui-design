import { useState } from "react";
import Dropdown from "../../../shared/dropdown/dropdown";

function Filters() {
  const indystryOptions = [
    { label: "Health care", value: "Health Care" },
    { label: "Industry 2", value: "industry 2" },
    { label: "Industry 3", value: "industry 3" },
    { label: "Industry 4", value: "isndustry 4" },
  ];
  const marketCapOptions = [
    { label: "Large-cap", value: "largec cap" },
    { label: "Medium-cap", value: "medium cap" },
    { label: "Small-cap", value: "small cap" },
  ];
  const riskOptions = [
    { label: "Low risk", value: "low risk" },
    { label: "Mid-risk", value: "mid risk" },
    { label: "Hish risk", value: "high risk" },
  ];

  const [valueIndustry, setValueIndustry] = useState("Health Care");
  const [valueMarket, setValueMarket] = useState("Large-cap");
  const [valueRisk, setValueRisk] = useState("Low risk");

  const handleChangeIndustry = (event) => {
    setValueIndustry(event.target.value);
  };
  const handleChangeMarket = (event) => {
    setValueMarket(event.target.value);
  };
  const handleChangeRisk = (event) => {
    setValueRisk(event.target.value);
  };

  return (
    <div className=" flex flex-col rounded-md p-2 py-6 m-1 my-4 lg:ml-6 bg-[#212121] font-poppins">
      <p className="text-center font-bold text-xl lg:text-2xl">Filters</p>
      <p className="mt-4 text-sm">Industry</p>

      <Dropdown
        label="Health Care"
        options={indystryOptions}
        value={valueIndustry}
        onChange={handleChangeIndustry}
      />
      <span className="py-1 text-xs text-neutral-500">Choose something</span>

      <p className="mt-4 text-sm">Market Cap</p>
      <Dropdown
        label="Large-cap"
        options={marketCapOptions}
        value={valueMarket}
        onChange={handleChangeMarket}
      />
      <span className="py-1 text-xs text-neutral-500">
        Press Apply to see changes
      </span>
      <p className="mt-4 text-sm">Risk</p>
      <Dropdown
        label="Health Care"
        options={riskOptions}
        value={valueRisk}
        onChange={handleChangeRisk}
      />
      <button className="mt-4 bg-[#554DB7] p-2 my-2 rounded-lg text-[20px]">
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;

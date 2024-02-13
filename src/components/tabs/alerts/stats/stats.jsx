import "./stats.css";
function Stats() {
  return (
    <div className="gradient-bg rounded-md border border-[#D5D5D5] p-2 m-2">
      <div className="grid justify-items-center">
        <ul className=" flex p-2 text-white  lg:text-lg sm:text-[16px] gap-2">
          <li>
            <div className="flex px-3">
              <img src="src/assets/tricker.png" width={"30px"} />
              <span> $TSLA</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-3 ">
              <img src="src/assets/contract.png" width={"20px"} />
              <span> 200 Contracts</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-3">
              <img src="src/assets/volume.png" width={"30px"} />
              <span> 12.2%</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-3 ">
              <img src="src/assets/risk.png" width={"30px"} />
              <span>Hish Risk</span>
            </div>
          </li>
        </ul>
      </div>
      <p className=" text-lg text-left">
        Someone Just bought xxxx contracts of $XYZ, this is notable because the
        relative volume on this options trade is X.X%.
      </p>
    </div>
  );
}

export default Stats;

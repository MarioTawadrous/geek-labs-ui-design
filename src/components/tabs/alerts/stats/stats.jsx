import "./stats.css";
function Stats() {
  return (
    <div className="gradient-bg rounded-md border border-[#D5D5D5] p-2 m-2">
      <div className="grid justify-items-center">
        <ul className="flex items-stretch p-1 text-white  lg:text-lg sm:text-[16px] gap-1">
          <li>
            <div className="flex grow px-1">
              {/* <img src="images/tricker.png" width={"30px"} /> */}

              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />{" "}
                <path d="M12 3v3m0 12v3" />
              </svg>
              <span> $TSLA</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-1 ">
              {/* <img src="images/contract.png" width={"20px"} /> */}
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>

              <span> 200 Contracts</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-1">
              {/* <img src="images/volume.png" width={"30px"} /> */}

              <svg
                className="w-10 h-10 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />{" "}
                <polyline points="4 12 7 8 11 10 16 4 20 8" />
              </svg>

              <span> 12.2%</span>
            </div>
          </li>
          <span>|</span>
          <li>
            <div className="flex px-1 ">
              {/* <img src="images/risk.png" width={"30px"} /> */}

              <svg
                fill="#FFFFFF"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g data-name="23. Bomb" id="_23._Bomb">
                    <path d="M20.24,8.78A.39.39,0,0,1,20,8.41,2.41,2.41,0,0,0,17.59,6h-.41A3,3,0,0,1,20,4h1.18a3,3,0,1,0,0-2H20a5,5,0,0,0-4.9,4h-.69A2.41,2.41,0,0,0,12,8.41a.41.41,0,0,1-.24.38,12,12,0,0,0,2.91,23.14A12.21,12.21,0,0,0,16,32a11.83,11.83,0,0,0,8-3.07A12,12,0,0,0,20.24,8.78ZM24,2a1,1,0,1,1-1,1A1,1,0,0,1,24,2ZM22.68,27.44A10,10,0,1,1,12.46,10.66,2.41,2.41,0,0,0,14,8.41.42.42,0,0,1,14.41,8h3.18a.42.42,0,0,1,.41.41,2.42,2.42,0,0,0,1.53,2.25,10,10,0,0,1,3.15,16.78Z"></path>
                    <path d="M16,17h2a1,1,0,0,0,0-2H17a1,1,0,0,0-2,0v.18A3,3,0,0,0,16,21a1,1,0,0,1,0,2H14a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,16,19a1,1,0,0,1,0-2Z"></path>
                  </g>
                </g>
              </svg>

              <span>High Risk</span>
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

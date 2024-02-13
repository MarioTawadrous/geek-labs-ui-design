import Filters from "../alerts/filters/filters";

import Stats from "./stats/stats";
import Alert from "./alert/alert";

const alerts = [
  {
    id: 1,
    content:
      "X company released a short report on $XYZ, High IV option sales opps",
  },
  {
    id: 2,
    content:
      "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  },
  {
    id: 3,
    content:
      "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  },
  {
    id: 4,
    content:
      "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  },
  {
    id: 5,
    content:
      "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  },
  {
    id: 6,
    content:
      "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  },
];

function Alerts() {
  return (
    <div className="flex p-2 m-2 mx-4 bg-black rounded-md gap-2 text-white font-nubtio_sans">
      <div className="w-1/4 ">
        <Filters />
      </div>
      <div className="w-3/4">
        <div className=" rounded-md p-1 lg:m-3 my-4 lg:mr-8 bg-[#212121]">
          {/* <p>This is Alert tab</p> */}
          <Stats />
          {alerts.map((alert) => (
            <Alert content={alert.content} key={alert.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alerts;

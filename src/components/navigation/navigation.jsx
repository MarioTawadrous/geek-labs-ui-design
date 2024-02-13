function Navigation() {
  return (
    <div className="grid justify-items-center p-2 bg-black m-2 mx-4 rounded-md">
      {/* <button>Button</button>
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        ...
      </button> */}

      <ul className=" flex p-2 text-white  lg:text-[48px] sm:text-[25px] gap-2">
        <li className="px-4">Trading</li>
        <span>|</span>
        <li className="px-4">Automation</li>
        <span>|</span>
        <li className="px-4">Portfolio</li>
        <span>|</span>
        <li className="px-4">Alerts</li>
        <span>|</span>
        <li className="px-4">Training</li>
      </ul>
    </div>
  );
}

export default Navigation;

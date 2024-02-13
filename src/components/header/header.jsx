function Header() {
  return (
    <>
      <div className="flex p-2 pb-0">
        {/* Logo */}
        <div></div>
        <img
          className="pt-2"
          src="images/street-suite-logo-icon.png"
          style={{ height: "45px" }}
        />

        <div className="flex justify-between w-full bg-black p-2 m-2 w-1645px h-70px rounded-lg ">
          {/* search */}

          <div className="flex p-2">
            <div className="flex items-center w-full  h-6 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>

          {/* bell + avatar + name + dropdown */}
          <div className="flex justify-end">
            <div className="p-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#554DB7"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>

            <img
              className="bg-white rounded-full"
              src="images/profile.png"
              width="44px"
            />
            <div className="px-4">
              <p>Moni Roy</p>
              <p className="text-sm">Admin</p>
            </div>
            <div className="flex px-2">
              <img src="images/circle-arrow-down.svg" width={"12px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

// backup copy
/*<div className="flex p-2">
  
  <img
    className=""
    src="src/assets/street-suite-logo-icon.png"
    style={{ height: "50px" }}
  />

  <div className="flex w-full bg-black p-2 m-2 w-1645px h-70px rounded-md">
    <input type="text" value="search" className="bg-nuetral-200 h-8" />

    <div className="flex justify-end">
      <div className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#554DB7"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </div>

      <img src="src/assets/profile.png" width="44px" />
      <div className="px-2">
        <p>Moni Roy</p>
        <p className="text-sm">Admin</p>
      </div>
    </div>
  </div>
</div>*/

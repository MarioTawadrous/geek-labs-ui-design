/* eslint-disable react/prop-types */

function Dropdown({ value, options, onChange }) {
  // const [clicked, setClicked] = useState(true);

  // const options = [
  //   { label: "Industry 2", value: "industry 1" },

  //   { label: "Vegetable", value: "vegetable" },

  //   { label: "Meat", value: "meat" },
  // ];

  // const [value, setValue] = useState("fruit");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    // <div className="relative">
    //   <div
    //     onClick={() => setClicked(!clicked)}
    //     className="border border-neutral-300 rounded p-2 cursor-pointer flex "
    //   >
    //     <div className="p-1">
    //       <svg
    //         width="18"
    //         height="18"
    //         viewBox="0 0 18 18"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M4.35714 7.125L0.875 9L4.35714 10.875M4.35714 7.125L9 9.625L13.6429 7.125M4.35714 7.125L0.875 5.25L9 0.875L17.125 5.25L13.6429 7.125M13.6429 7.125L17.125 9L13.6429 10.875M13.6429 10.875L17.125 12.75L9 17.125L0.875 12.75L4.35714 10.875M13.6429 10.875L9 13.375L4.35714 10.875"
    //           stroke="#6B6B6B"
    //           strokeWidth="1.5"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //     </div>
    //     <span className="text-[#A3A3A3]">{label}</span>
    //   </div>

    //   </div>
    // </div>

    // <label>
    //   {label}
    <div className=" flex gap-2 border border-neutral-300 rounded p-1 px-2 cursor-pointer bg-inherit">
      <div className="flex py-1">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.35714 7.125L0.875 9L4.35714 10.875M4.35714 7.125L9 9.625L13.6429 7.125M4.35714 7.125L0.875 5.25L9 0.875L17.125 5.25L13.6429 7.125M13.6429 7.125L17.125 9L13.6429 10.875M13.6429 10.875L17.125 12.75L9 17.125L0.875 12.75L4.35714 10.875M13.6429 10.875L9 13.375L4.35714 10.875"
            stroke="#6B6B6B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <select
        className=" appearance-none row-start-1 col-start-1  bg-inherit text-neutral-400 text-sm"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    // </label>
  );
}

export default Dropdown;

// const DropdownMenu = ({ label, value, options, onChange }) => {
//   return (
//     <label>
//       {label}

//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// };

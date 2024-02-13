/* eslint-disable react/prop-types */
function Alert(props) {
  return (
    <div className="bg-black border border-[#D5D5D5] rounded-lg p-2 py-1 m-2">
      <p className=" text-lg text-left">{props.content}</p>
    </div>
  );
}

export default Alert;

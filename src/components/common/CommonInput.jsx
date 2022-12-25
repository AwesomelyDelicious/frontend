import React from "react";

function CommonInput({ value, name, updateSignInfo }) {
  return (
    <div className="mt-4">
      <input
        className="h-[45px] w-[350px] pl-3 pb-1 mb-[20px] border-solid border-2 rounded-2xl shadow-lg"
        onChange={updateSignInfo}
        type="text"
        name={name}
        id=""
        placeholder={name}
        value={value}
      />
    </div>
  );
}

export default CommonInput;

import React from "react";

function CommonInput({ value, name, updateSignInfo }) {
  return (
    <div className="mt-4">
      <input
        className="h-8 pl-3 pb-1"
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

import React from "react";

function CommonInput({ value, name, updateSignInfo }) {
  return (
    <div>
      <input
        onChange={updateSignInfo}
        type="text"
        name={name}
        id=""
        value={value}
      />
    </div>
  );
}

export default CommonInput;

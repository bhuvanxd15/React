import React, { useState } from "react";

function Button({ colorName, setcolors }) {
  // const [color, setcolor] = useState("olive");
  return (
    <div>
      <button
        onClick={() => setcolors(colorName)}
        className=" outline-none px-4  rounded-full text-white shadow-lg  "
        style={{ backgroundColor : colorName}}
      >
        {colorName}
      </button>
    </div>
  );
}

export default Button;

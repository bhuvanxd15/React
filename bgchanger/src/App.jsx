import { useState } from "react";
import  Button  from "./components/Button";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
            {/* <button  onClick={()=> setcolor("red")}
              className=" outline-none px-4  rounded-full text-white shadow-lg  "
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>

            <button onClick={()=> setcolor("green")}
              className=" outline-none px-4  rounded-full text-white shadow-lg  "
              style={{ backgroundColor: "green" }}
            >
             GREEN
            </button>

            <button onClick= { ()=> setcolor("blue")}
              className=" outline-none px-4  rounded-full text-white shadow-lg  "
              style={{ backgroundColor: "blue" }}
            >
             BLUE
            </button>  */}

            <Button colorName="red" setcolors={setcolor} />
            <Button colorName="green" setcolors={setcolor} />
            <Button colorName="orange" setcolors={setcolor} />
            <Button colorName="blue" setcolors={setcolor} />
            <Button colorName="purple" setcolors={setcolor} />
            <Button colorName="yellow" setcolors={setcolor} />
            <Button colorName="grey" setcolors={setcolor} />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;

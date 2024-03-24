import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenertor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}~`[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenertor();
  }, [length, numAllowed, charAllowed, passwordGenertor]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-4 my-8  text-center text-white bg-gray-700">
      Password Genertor
      <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />  

        <button
          onClick={copyPassword}
          className="online-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          COPY
        </button>
      </div>
      {/* //range wali chiz ke liye  */}
      <div className=" flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length {length} </label>
        </div>
        {/* // for number wala checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>

        {/* // char wali chhiz ke liye  */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={setCharAllowed}
            id="numInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label> special Charecter</label>
        </div>
      </div>
    </div>
  );
}

export default App;

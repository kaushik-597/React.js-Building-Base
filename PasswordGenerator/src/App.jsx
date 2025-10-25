import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) str += "123456789";
    if (symbolAllowed) str += "$!@#%&_-.";

    for (let i = 1; i <= length; i++) {
      const idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
      setPassword(pass);
    }
  }, [length, numAllowed, symbolAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, symbolAllowed]);

  const passRef = useRef();

  const copyBtnAction = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    passRef.current.blur();
  };

  return (
    <>
      <div className="bg-gray-800 h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-gray-100 p-5  rounded-xl shadow-lg max-w-md">
          <h1 className="text-4xl font-bold font-sans text-gray-900 mb-8">
            Password Generator
          </h1>
          <div className="flex w-full mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
              className="w-full bg-blue-200 rounded-tl-2xl rounded-bl-2xl p-2 text-xl"
            />
            <button
              onClick={copyBtnAction}
              className="bg-blue-500 p-2 rounded-tr-2xl rounded-br-2xl text-xl text-white text-cente shadow-lg outline-none"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-3">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                name="length"
                min={6}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="length" className="min-w-16">
                Length: {length}
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name="number"
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name="symbol"
                defaultChecked={symbolAllowed}
                onChange={() => {
                  setSymbolAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="symbol">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const changeClr = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="flex  justify-center items-center h-[500px]">
          <h1 className="text-white text-6xl font-bold font-sans p-4">
            Background Color Changer
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center inset-x-0 px-2 gap-3 p-2 fixed bottom-12">
          <div className="bg-white rounded-2xl flex justify-center gap-3 px-3 py-2 shadow-lg">
            <button
              className="bg-red-500 text-white rounded-2xl px-4 py-3 flex-1 w-24 shadow-lg"
              onClick={() => {
                changeClr("red");
              }}
            >
              Red
            </button>
            <button
              className="bg-blue-500 text-white rounded-2xl px-4 py-3 flex-1 w-24 shadow-lg"
              onClick={() => {
                changeClr("blue");
              }}
            >
              Blue
            </button>
            <button
              className="bg-green-500 text-white rounded-2xl px-4 py-3 flex-1 w-24 shadow-lg"
              onClick={() => {
                changeClr("green");
              }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

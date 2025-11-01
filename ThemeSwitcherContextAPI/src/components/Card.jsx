import React from "react";
import useTheme from "../contexts/ThemeContext";

export default function Card() {
  const { themeMode } = useTheme();

  return (
    <div
      className={`w-full border rounded-lg shadow ${
        themeMode === "dark"
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://dlcdnwebimgs.asus.com/gain/31E0CE80-2EF1-4914-ABFF-B08DF7FB2CDC/w750/h470/fwebp"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight">
          ROG Gaming Series, Republic of Gamers
        </h5>
        <div className="flex items-center justify-between mt-3">
          <span className="text-3xl font-bold">$599</span>
          <a
            href="/"
            className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              themeMode === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

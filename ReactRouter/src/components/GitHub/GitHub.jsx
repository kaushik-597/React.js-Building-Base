import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 bg-blue-50 p-6 rounded-2xl shadow-md">
      <div className="flex justify-center md:justify-start flex-none">
        <img
          src={data.avatar_url}
          alt={data.name}
          className="w-[22rem] h-[22rem] object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 hover:ring-4 hover:ring-green-500"
        />
      </div>

      <div className="flex flex-col bg-white shadow-xl p-6 w-full rounded-xl gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gray-100 p-3 text-orange-700 font-extrabold font-sans rounded-md shadow-xl">
          {data.name}
        </h1>

        <div className="space-y-2 text-gray-800">
          <h3 className="text-lg font-medium border-l-4 border-blue-500 pl-3 tracking-wide">
            Public Repos:{" "}
            <span className="font-bold text-gray-900">{data.public_repos}</span>
          </h3>

          <h3 className="text-lg font-medium border-l-4 border-green-500 pl-3 tracking-wide">
            GitHub User ID:{" "}
            <span className="font-bold text-gray-900">{data.id}</span>
          </h3>

          <h3 className="text-lg font-medium border-l-4 border-red-500 pl-3 tracking-wide">
            Bio: <span className="font-bold text-gray-900">{data.bio}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default GitHub;

import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="w-full p-6">
      <h1 className="text-white text-center bg-red-400 rounded-2xl font-bold text-6xl p-5">
        User {userid}
      </h1>
    </div>
  );
}

export default User;

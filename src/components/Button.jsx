import React from "react";

const Button = ({ text, icon }) => {
  return (
    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-amber-600 transition duration-300 capitalize">
      {text}
    </button>
  );
};

export default Button;

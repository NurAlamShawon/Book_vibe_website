import React from "react";
import { NavLink } from "react-router";
import Books from "../Books/Books";

const Herosection = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-[#e1e1e1] rounded-2xl py-10">
      <div className="xl:flex xl:flex-row-reverse justify-between items-center xl:px-20 px-4">
        <div>
          <img
            src="/src/assets/hero pic.png"
            alt=""
            srcset=""
            className="xl:mb-0 mb-10"
          />
        </div>
        <div className="max-w-lg space-y-10">
          <h1 className="xl:text-5xl text-4xl font-bold playfair-display">
            Books to freshen up your bookshelf
          </h1>

          <NavLink to={"listed-book"}>
            <button className="bg-[#23BE0A] font-bold xl:text-xl text-base text-white p-7 rounded-xl cursor-pointer">
              View the list
            </button>
          </NavLink>
        </div>
      </div>

      <Books></Books>
    </div>
  );
};

export default Herosection;

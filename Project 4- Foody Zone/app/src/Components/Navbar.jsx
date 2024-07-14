import React, { useState } from "react";

const Navbar = ({ searchFood, filterFood, selected_btn }) => {
  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  return (
    <nav
      id="nav"
      className="bg-[#323334] flex flex-col h-[170px] gap-[54px] justify-center pt-[60px]"
    >
      <div id="top" className="flex justify-around items-center">
        <img src="/images/logo.svg" alt="logo" />
        <input
          type="text"
          onChange={searchFood}
          className="bg-[#323334] text-white px-[10px] h-[40px] border border-red-500 text-[16px] rounded-[5px]  "
          placeholder="Search Food"
        />
      </div>
      <div id="buttons" className="flex justify-center pb-[20px] gap-[10px]">
        {filterBtns.map((value) => (
          <button
            key={value.name}
            onClick={() => filterFood(value.type)}
            className="bg-red-600 text-white px-[10px] border-none rounded-[5px] "
          >
            {value.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

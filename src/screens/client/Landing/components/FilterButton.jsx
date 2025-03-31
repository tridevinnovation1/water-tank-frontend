import React, { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";

const FilterButton = () => {
  const [selectedOption, setSelectedOption] = useState("Total Station");
  const [activeCategory, setActiveCategory] = useState("Total Station");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Test", selectedOption);
  };
  const categories = [
    { name: "Total Station", icon: <GiSofa className="text-4xl" /> },
    { name: "Level Machine", icon: <FaLaptop className="text-4xl" /> },
    { name: "Thedolite", icon: <FaCar className="text-4xl" /> },
    { name: "Drones", icon: <FaCamera className="text-4xl" /> },
  ];

  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-6 hidden md:block">
        Popular Categories
      </h1>
      <div className="hidden md:flex items-center justify-center gap-16 mt-5 flex-wrap">
        {categories.map((category) => (
          <div>
            <div
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`cursor-pointer w-48 h-48 rounded-full flex flex-col justify-center items-center border transition-colors ${activeCategory === category.name
                  ? "bg-[#FFAD33]  text-white"
                  : "bg-[#f3f4f6] text-[#FFAD33]"
                }`}
            >
              <div
                className={`text-4xl ${activeCategory === category.name
                    ? "text-white"
                    : "text-[#FFAD33]"
                  }`}
              >
                {category.icon}
              </div>
            </div>
            <h2 className="text-xl text-center mt-4 font-semibold">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="w-full h-12 showMenu:hidden mt-6 flex items-center justify-between px-4">
        <h2 className="text-2xl font-semibold">Category</h2>
        <div>
          <select
            id="dropdown"
            name="options"
            value={selectedOption}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none   text-lg font-medium"
          >
            <option value="Total Station">Total Station</option>
            <option value="Level Machine">Level Machine</option>
            <option value="Thedolite">Thedolite</option>
            <option value="Drones">Drones</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default FilterButton;

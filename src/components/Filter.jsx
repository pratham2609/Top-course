import React from "react";

export default function Filter({ filterData, category, setCategory }) {
  function filterDataHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data, index) => {
        return (
          <button
            key={`filterData${index}`}
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
            ${category === data.title ? "opacity-80 border-white" : "opacity-50 border-black"}
            `}
            onClick={() => filterDataHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

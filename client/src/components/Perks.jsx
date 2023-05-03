import React from "react";
import { perks } from "../constants";

const Perks = ({ selected, onChange }) => {
  return (
    <>
      <h2 className="text-xl mt-3">Perks</h2>
      <p className="text-gray-500">Select all the perks of the place </p>
      <div className="gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {perks.map((item, index) => (
          <label
            className="border p-4 flex rounded-2xl gap-2 cursor-pointer"
            key={item.id}
          >
            <input type="checkbox" />
            <div className="">{item.img}</div>
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Perks;

import React, { useState } from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Navigation = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="bg-transparent shadow-md rounded-[20px] py-4 px-4 flex">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search.."
        className="outline-none  active:border-[#eee] rounded-[20px] p-2 px-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="rounded-[20px] ml-2">
        <Select
          options={options}
          defaultValue={{ value: "chocolate", label: "Chocolate" }}
        />
      </div>
      <div className="rounded-[20px] ml-2">
        <Select
          options={options}
          defaultValue={{ value: "chocolate", label: "Chocolate" }}
        />
      </div>
    </div>
  );
};

export default Navigation;

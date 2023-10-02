import React from "react";

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const Pagination = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: React.SetStateAction<number>) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className=" flex justify-between bg-transparent shadow-md rounded-[20px] py-4 px-4 my-4 ">
      <div>
        <h1>1 from 10</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any) => (
            <button
              key={item}
              className="bg-blue-300  rounded-md px-2 text-white"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

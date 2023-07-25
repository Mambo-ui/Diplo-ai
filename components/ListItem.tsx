import React from "react";

export default function ListItem() {
  return (
    <div className="items-center flex flex-row justify-between p-0 ">
      <div className="px-2.5 py-1 rounded-full bg-violet-200 text-violet-800 font-bold roboto">
        A
      </div>
      <div className="px-2  font-medium">List item</div>
      <div className="hundred px-5 text-sm "> 100+</div>
      <div className="px-2">
        <input type="checkbox" className="input" />
      </div>
    </div>
  );
}

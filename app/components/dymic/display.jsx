import { getAllBookCategories } from "@/app/data/bookservice";
import { getAllCartoonGenres } from "@/app/data/cartoonservice";
import React from "react";
import Select from "./select";

export default async function Display({ header, type }) {
  let data = [];
  if (type == "book") {
    const categories = await getAllBookCategories();
    const bookData = await categories.payload;
    data = bookData;
  } else if (type == "cartoon") {
    const genre = await getAllCartoonGenres();
    const cartoonData = await genre.payload;
    data = cartoonData;
  }

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h1 className="bg-gray-100 w-fit p-2 px-5 rounded-lg font-bold text-[#087e8b]">
          {header}
        </h1>
        <Select type={type} data={data} />
      </div>
      <hr className="bg-[#087e8b75] h-[1.5px]" />
    </div>
  );
}

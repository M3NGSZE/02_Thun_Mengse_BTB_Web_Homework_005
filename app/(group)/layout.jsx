import React from "react";
import Sidebar from "../components/common/sidebar";
import SearchBar from "../components/common/searchbar";

export default function content({ children }) {
  return (
    <div className="grid grid-cols-5">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-4 bg-gray-100 p-10 pb-0">
        <div>
          <SearchBar />
        </div>
        <div className="mt-5 bg-white rounded-3xl p-10 pb-0">{children}</div>
      </div>
    </div>
  );
}

import Display from "@/app/components/dymic/display";
import { getAllCartoons } from "@/app/data/cartoonservice";
import { formatYear } from "@/app/data/helper";
import Link from "next/link";
import React from "react";

export default async function page() {
  const allCartoons = await getAllCartoons();
  const cartoons = await allCartoons.payload;
  // console.log((cartoons))

  return (
    <div>
      <Display header={"Old School Cartoons"} type={"cartoon"} />

      <div className="px-8 overflow-auto h-[calc(100vh_-200px)] pb-10">
        <div className="grid grid-cols-3 mt-20 gap-y-44 gap-x-16 mx-auto w-full">
          {cartoons.map((cartoon) => {
            return (
              <div className="card flex flex-col gap-y-2" key={cartoon.id}>
                <Link
                  href={`/old-school-cartoons/${cartoon.id}`}
                  rel="stylesheet"
                >
                  <div>
                    <img
                      src={cartoon.image}
                      alt=""
                      className="w-full rounded-3xl h-[400px] object-cover"
                    />
                  </div>
                  <div className="detail ">
                    <h1 className="text-xl font-semibold">
                      {cartoon.ct_title}
                    </h1>
                    <div className="flex text-[#087e8b] items-center gap-x-2 text-lg font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                          stroke="#087E8B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                          stroke="#087E8B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>{cartoon.view_count}</span>
                      <span>times</span>
                      <span>|</span>

                      <span>{formatYear(cartoon.published_year)}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

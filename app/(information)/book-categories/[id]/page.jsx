import { getBookById } from "@/app/data/bookservice";
import React from "react";

export default async function page({ params }) {
    
    const bookId = await params?.id;
    const book = await getBookById(bookId);
    const bookDetail = book?.payload;

    return (
      <div className=" px-20 pt-16 bg-gray-200">
        <nav aria-label="Breadcrumb border">
          <ol className="flex items-center gap-1 text-xl text-black font-semibold gap-x-5">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 transition hover:text-[#087e8b]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a
                href="/book-categories"
                className="block transition hover:text-[#087e8b]"
              >
                Book Categories
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a href="#" className="block transition text-red-700">
                {bookDetail.book_title}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-20 bg-white rounded-2xl pb-10">
          <div className="w-full px-10">
            <div className="relative h-[300px]">
              <img
                src={bookDetail.image}
                alt=""
                className="h-[400px] rounded-2xl absolute right-0 top-[-100px]"
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <h1 className="text-2xl font-semibold">
                {bookDetail.book_title}
              </h1>
              <p className="text-xl font-semibold">
                By{" "}
                <span className=" text-[#087e8b]">
                  {bookDetail.book_author}
                </span>
              </p>
              <p>{bookDetail.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

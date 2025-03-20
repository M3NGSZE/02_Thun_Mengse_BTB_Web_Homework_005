import Display from "@/app/components/dymic/display";
import { getAllBookCategoryById, getAllBooks } from "@/app/data/bookservice";
import Link from "next/link";
import React from "react";

export default async function page({ searchParams }) {
  const category = (await searchParams)?.category || "";
  const search = (await searchParams)?.search || "";
  const books = await getAllBooks(category, search);
  const allBooks = await books.payload;

  const findCate = await getAllBookCategoryById(category)
  const find = await findCate.payload
  const cateName = await find?.book_cate_name || "All Books"

  return (
    <div>
      <Display header={cateName} type={"book"} />

      <div className="px-8 overflow-auto h-[calc(100vh_-200px)] pb-10">
        <div className="grid grid-cols-2 mt-40 gap-y-44 gap-x-10 mx-auto w-full">
          {allBooks.map((book) => {
            return (
              <div key={book.id}>
                <div className="flex items-end border rounded-3xl gap-5 px-7 py-5 bg-gray-100">
                  <div className="w-fit relative">
                    <div className="absolute left-0 bottom-[4rem] w-full">
                      <img
                        src={book.image}
                        alt=""
                        className="w-full rounded-3xl max-h-64 h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        rel="stylesheet"
                        href={`/book-categories/${book.id}`}
                        className="bg-[#39bade57] p-2 px-4 rounded-full font-normal max-w-48 text-center whitespace-nowrap"
                      >
                        READ FULL ARTICLE
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold line-clamp-1">
                      {book.book_title}
                    </h1>
                    <p className="line-clamp-6">{book.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

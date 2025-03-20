"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function SearchBar() {
    const router = useRouter();
    const searchRef = useRef(null);
    const params = useSearchParams();
    const search = params.get("search") ? params.get("search") : "";

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.replace(`?search=${searchRef.current.value}`);
            }}
            className="relative"
        >
            <button type="submit" className="cursor-pointer">
                <svg
                    className="absolute top-3.5 left-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
                        stroke="#B9B9B9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>
            <input
                ref={searchRef}
                defaultValue={search}
                placeholder="Search book or category"
                className="w-full bg-white py-3 pl-14 pr-5 rounded-full h-12 border-none focus:border-none focus:ring-0 focus:outline-deep-teal"
                type="text"
                name="search"
            />
        </form>
    );
}

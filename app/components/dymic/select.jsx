"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Select({ type, data }) {
    const router = useRouter();
    const handleChange = (e) => {
        console.log(e.target.value)
        router.replace(`?category=${e.target.value}`)
        // pushId(e.target.value);
    };
    return (
        <div>
            {type == "book" ? (
                <select onChange={handleChange} className="border rounded p-2">
                    <option value="">Select a category</option>
                    {data.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>
                                {category.book_cate_name}
                            </option>
                        );
                    })}
                </select>
            ) : type == "cartoon" ? (
                <select onChange={handleChange} className="border rounded p-2">
                    <option value="">Select a category</option>
                    {data.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.cartoon_genre}
                            </option>
                        );
                    })}
                </select>
            ) : (
                ""
            )}
        </div>
    );
}

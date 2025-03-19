
import { getAllBookCategories } from '@/app/data/bookservice';
import { getAllCartoonGenres } from '@/app/data/cartoonservice';
import React from 'react'

export default async function Display({ header, type }) {
    const categories = await getAllBookCategories();
    const bookData = await categories.payload;

    const genre = await getAllCartoonGenres()
    const cartoonData = await genre.payload;

    return (
        <div>
            <div className="flex justify-between mb-2">
                <h1 className="bg-gray-100 w-fit p-2 px-5 rounded-lg font-bold text-[#087e8b]">
                    {header}
                </h1>
                {type == "book" ? (
                    <select className='border rounded p-2'>
                        <option value="">Select a category</option>
                        {bookData.map(category => {
                            return (
                                <option key={category.id} value={category.book_cate_name}>
                                    {category.book_cate_name}
                                </option>);
                        })}
                    </select>
                ) : type == "cartoon" ? (
                    <select className='border rounded p-2'>
                        <option value="">Select a category</option>
                        {cartoonData.map(genre => {
                            return (
                                <option key={genre.id} value={genre.cartoon_genre}>
                                    {genre.cartoon_genre}
                                </option>);
                        })}
                    </select>
                ) : ""
                }
            </div>
            <hr className="bg-[#087e8b75] h-[1.5px]" />
            
        </div>
    );
} 

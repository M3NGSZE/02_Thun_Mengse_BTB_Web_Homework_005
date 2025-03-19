import React from 'react'

export default function layout({children}) {
    return (
        <div className='bg-gray-200 h-[100vh]'>
            {children}
        </div>
    )
}

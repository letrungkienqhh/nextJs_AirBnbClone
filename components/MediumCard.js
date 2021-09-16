import React from 'react'
import Image from 'next/image'
export const MediumCard = ({img,title}) => {
    return (
        <div className="cursor-pointer hover:scale-105 hover:-rotate-3 m-2 items-center 
        transition transform duration-100 ease-out">
            <div className="relative w-80 h-80 rounded-full">
                <Image src={img} layout="fill" ></Image>
                
            </div>

            <h4 className="text-gray-500 mt-2 justify-center">{title}</h4>
        </div>
    )
}

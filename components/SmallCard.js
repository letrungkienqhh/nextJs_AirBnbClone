import React from 'react'
import Image from 'next/image'
export const SmallCard = ({img,distance,location}) => {
    return (
        <div className="flex items-center m-2 p-2 space-x-3 mt-3 rounded-3 cursor-pointer rounded-lg
        hover:bg-gray-200 hover:scale-110  transition transform duration-75 ease-out ">
            {/* Left */}
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>
            {/* Right */}
            <div className="">
                <h2>{location}</h2>
                <h3 className="text-gray-500 inline-flex">{distance}</h3>
            </div>
        </div>
    )
}

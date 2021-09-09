import React from 'react'
import Image from 'next/image'
export const LargeCard = ({img,title,description,buttonText}) => {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image 
                    src={img} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="absolute top-1/2  justify-center px-10 space-y-2">
                <h3 className="text-gray-800 text-3xl font-semibold">{title}</h3>
                <p className="font-light">{description}</p>
                <button className="bg-gray-400 p-3 rounded-md transition transform hover:scale-110  
                hover:text-lg ease-out active:scale-75">{buttonText}</button>
            </div>
        </div>
    )
}

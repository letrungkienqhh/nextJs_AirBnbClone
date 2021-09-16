import React from 'react'
import Image from 'next/image'
const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mx-2 flex-row">
            <Image 
                src="/images/banner.jpg"
                layout="fill"
                objectFit="cover"
            />
            
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-gray-200 md:text-lg">Not sure where to go??</p>
                <button className="text-pink-400 text-lg bg-gray-200 rounded-full px-3 py-3 shadow-md 
                font-bold my-3 hover:shadow-xl active:scale-90 transition duration-100">
                    I'm flexible
                 </button>
            </div>
        </div>
    )
}
export  {Banner}
import React from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
export const InfoCard = ({img,location,title,description,star,price,total}) => {
    return (
        <div className="flex p-5 border-red-200 border-t-1 mt-3 hover:shadow-xl hover:bg-gray-200 hover:scale-95  transition transform duration-75 ease-out border-rounded ">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 cursor-pointer hover:shadow-xl ">
                <Image src={img}  layout="fill" objectFit="cover" className="rounded-md"/>

            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between ">
                    <p className="">{location}</p>
                    <HeartIcon className=" cursor-pointer h-7"></HeartIcon>
                </div>
            
                <h4 className="text-xl">{title}</h4>
               
                <div className="border-b w-100 pt-2"/>
                    
                <p className="pt-2 text-sm flex-grow ">{description}</p>
                <div className="flex justify-between items-end pt-3">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>  {star}
                      
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}

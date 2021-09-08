import React from 'react'
import Image from 'next/image'
import {GlobeAltIcon,
         MenuIcon, 
         SearchIcon, 
         UserCircleIcon,

        } from '@heroicons/react/solid'
export const Header = () => {
    return (
        <div className="stickey top-0 z-50 grid grid-cols-3 
             shadow-md p-5 md:px-10">
         
            

            {/* Left */}
           <div className=" relative flex items-center h-10 cursor-pointer my-auto space-x-4">
                <Image  src="https://cdn.icon-icons.com/icons2/836/PNG/512/Airbnb_icon-icons.com_66791.png" 
                        layout='fill'
                        objectFit="contain"
                        objectPosition='left'
                        className=''
                />
                <h4 className='border-red-900 items-center cursor-pointer'>TK dz -AIRBNB</h4>
           </div>

           {/* Middle */}
           <div className='flex items-center border-2 rounded-full p-2 shadow-sm '>
                <input className="flex-grow pl-1 md:pl-3 bg-transparent outline-none text-gray-500 text-sm placeholder-gray-600"
                 type='text' 
                 placeholder="Start your search"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400
                 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
           </div>
           {/* Right */}


           <div className="flex items-center space-x-4 justify-end text-gray-500  ">
               <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
               <GlobeAltIcon className="h-6 cursor-pointer"/>
               <div className="flex space-x-2 border-2 rounded-full p-2">
                   <MenuIcon className="h-6 cursor-pointer"/>
                   <UserCircleIcon className="h-6 cursor-pointer"/>
               </div>
           </div>
        </div>
    )
}

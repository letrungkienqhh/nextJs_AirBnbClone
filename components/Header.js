import React,{useState} from 'react'
import Image from 'next/image'//Next Image

import {GlobeAltIcon,
         MenuIcon, 
         SearchIcon, 
         UserCircleIcon,
         UserIcon

        } from '@heroicons/react/solid'//Icon

import { useRouter } from 'next/router'
import { DateRangePicker } from 'react-date-range'; //Date range picker

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



export const Header = () => {
    const [searchInput,setSearchInput]=useState("")
    const [startDate,setStartDate]=useState(null)
    const [endDate,setEndDate]=useState(null)
    const [numberofGuests,setNumberOfGuests]=useState(1)
    
    const router=useRouter()


    const handleSelect=(ranges)=>{
        
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
       
    }
    const search=()=>{
      
        
        router.push({
            pathname:'/search',
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                numberofGuests,
            }
        })
    }
    const resetSearchInput=()=>{
        setSearchInput('')
    }

    const selectionRange={
        startDate:startDate ,
        endDate: endDate ,
        key:'selection'
    }

    return (
        
            <div className="sticky top-0 z-50 grid grid-cols-3 
             shadow-md p-5 md:px-10">
                {/* Left */}
                <div 
                    className=" relative flex items-center h-10 cursor-pointer my-auto space-x-4 animate-bounce"
                    onClick={()=>router.push("/")}>
                
                        <Image  src="https://cdn.icon-icons.com/icons2/836/PNG/512/Airbnb_icon-icons.com_66791.png" 
                                layout='fill'
                                objectFit="contain"
                                objectPosition='left'
                                
                        />
                        <h4 className='border-red-900 items-center cursor-pointer'>TK dz -AIRBNB</h4>
                </div>



                {/* Middle */}
                <div className='flex items-center border-2 rounded-full p-2 shadow-sm '>
                        <input className="flex-grow w-4 md:w-10 pl-1 md:pl-3 bg-transparent outline-none text-gray-500 text-sm placeholder-gray-600"
                        type='text' 
                        placeholder="Search something"
                        value={searchInput}
                        onChange={(e)=>{    setSearchInput(e.target.value) 
                                            
                        }}/>
                        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400
                        text-white rounded-full p-2 cursor-pointer md:mx-2"/>
                        
                </div>
                {/* Right */}


                <div className="flex items-center space-x-4 justify-end text-gray-500  ">
                    <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="h-6 cursor-pointer hover:animate-spin"/>
                    <div className="flex space-x-2 border-2 rounded-full p-2">
                        <MenuIcon className="h-6 cursor-pointer"/>
                        <UserCircleIcon className="h-6 cursor-pointer"/>
                    </div>
                </div>

                {searchInput && 
                        (
                            <div className=" flex flex-col col-span-3 mx-auto pt-3 ">
                                <DateRangePicker 
                                    ranges={[selectionRange]}
                                    minDate={new Date()}
                                    rangeColors={["#FD5B61"]}
                                    color="yellow"
                                    onChange={handleSelect}
                                    className=""
                                />
                                <div className="flex items-center pb-2">
                                    <h2 className="text-2xl flex-grow font-semibold">
                                        Number of Guests
                                    </h2>
                                    <UserIcon className="h-5"/>
                                    <input 
                                        type="number" 
                                        value={numberofGuests}
                                        onChange={e=>setNumberOfGuests(e.target.value)}
                                        min={1}
                                        className="w-12 pl-2 text-red-300 text-center outline-none   "/>
                                
                                </div>
                                <div className="flex pt-3 border-t-2 space-x-1 te ">
                                    <button 
                                        className="flex-grow rounded-full bg-red-300 hover:text-red-600 active:scale-90 p-2" 
                                        onClick={()=>resetSearchInput()}>Cancel
                                    </button>
                                    <button 
                                        className="flex-grow rounded-full bg-blue-300 hover:text-blue-500 active:scale-90 p-2"
                                        onClick={()=>search()}>
                                        Search
                                    </button>
                                </div>
                            </div>
                         )
                }
            
        </div>
        
   
        
    )
}

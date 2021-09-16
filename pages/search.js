import React from 'react'
import {useRouter} from 'next/router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import  format from 'date-fns/format'
import { InfoCard } from '../components/InfoCard'

const search = ({searchResults}) => {
    const router=useRouter()
    console.log(searchResults)
    const {location,startDate,endDate,numberofGuests}=router.query
    console.log(`Search`)
    console.log(router.query)
    console.log(startDate)
    console.log(endDate)
    const formatStartDate =format(new Date(startDate),"dd MMMM yyyy")
    const formatEndDate= format(new Date(endDate),"dd MMMM yyyy")
    console.log(formatStartDate)
    const start=new Date(startDate)
    console.log(start)
    
    //  const formattedEndDate = format(new Date(endDate),"dd MM yyyy")
    //  console.log(formattedStartDate)
      const range=`${formatStartDate}-${formatEndDate}`
    return (
        <div>
            <Header/>
            <main className="flex">
                <section className="flex-grow p-2">
                    <p className="text-xs">300+ Stays - {range} - {numberofGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden md:inline-flex space-x-1 text-gray-500">
                        <p className="button">
                             Cancelation Flexibility
                        </p>
                        <p className="button">
                             Type of Place
                        </p>
                        <p className="button">
                             Price
                        </p>
                        <p className="button">
                            Rooms and Beds
                        </p>
                        <p className="button">
                             More Filters
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map(({img,location,title,description,star,price,total})=>
                            <InfoCard 
                                        key={img}
                                        img={img}
                                        location={location} 
                                        title={title}
                                        description={description}
                                        star={star}
                                        price={price}
                                        total={total}
                            />)}
                    </div>
                    
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default search

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz')
                         .then(res => 
                             res.json()
                         )
    return {
        props: {
            searchResults
        }
    }
}
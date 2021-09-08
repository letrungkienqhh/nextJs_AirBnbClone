import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import {SmallCard} from '../components/SmallCard'
import {MediumCard} from '../components/MediumCard'
import { LargeCard } from '../components/LargeCard'
import {Footer} from '../components/Footer'
export default function Home({exploreData,liveData}) {
  
  console.log(liveData)
  return (
    <div className="">
      <Head>
        <title>Kien AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 pb-8 sm:px-16">
        <section className="pt-3">
            <h1 className="text-3xl font-semibold pb-5">Explore nearny</h1>
            {/* put some data of places from server  */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {exploreData.map(
              (item)=><SmallCard
                          img={item.img} 
                          distance={item.distance} 
                          location={item.location}/>
              )
            }
            </div>
          
        </section>
        <section>
            <h2 className="text-3xl font-semibold py-4">Live any places</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
                {liveData.map(
                  (liveData)=>
                    <MediumCard
                      img={liveData.img}
                      title={liveData.title}/>
                )
                }
            </div>
        </section>
        <LargeCard 
          img="http://links.papareact.com/4cj"
          title="The Outdoors"  
          description="Created by Kien LE Trung"
          buttonText="Get Inspired"
        />
        
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').then
      (
        (res)=>res.json()
      )
  const liveData=await fetch('https://links.papareact.com/zp1').then
      ((res)=>res.json())
  
  return ({
    props:{
      exploreData,
      liveData
    }
  })
}
"use client"

import Link from "next/link"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Image from "next/image"
import { TfiAngleDoubleRight} from "react-icons/tfi"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import urlFor from "@/lib/urlFor"


const Mission = () => {
    const [sliderData, setSLiderData] = useState<AboutMission[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "aboutusMission"] {
            ...,
          } | order(_createdAt asc)`
          const response = await client.fetch(query);
  
          setSLiderData(response);
          setIsLoading(false);
          console.log("Fetched Data... ",response)
  
        } catch (error) {
          console.error("Error fetching data: ", error)
          setIsLoading(false);
        }
  
      }
      fetchSliderData();
    }, [])

  return (
    <div className='mission-container'>
      {sliderData ? (

        <div className='mission-cotainer__content'>
            {sliderData.map((item, index) =>(
                    <div className='grid-content' key={index}>
                    <div className='info'>
                        <div className="info-img">
                         <img src={urlFor(item?.backgroundImage).url()}/>
                        </div>
                        <div className="info-content">
                            <p>{item?.description}</p>
                        </div>
                            <Link href="/contact" className="link-content">
                                <button>get in touch <MdOutlineKeyboardArrowRight/></button>
                            </Link>
                    </div>
                    <div className="img-content">
                        <div className="img">
                        <Image src={urlFor(item?.image).url()} width={100} height={100} alt="image-url"/>
                        </div>
                        
                        <h2>{item?.title}</h2>
                        <h3><TfiAngleDoubleRight className="animate-pulse"/></h3>
                    </div>
                </div>

            ))}
        </div>
      ): (
        <div className="flex justify-center">Loading ...</div>
      )}
    </div>
  )
}

export default Mission
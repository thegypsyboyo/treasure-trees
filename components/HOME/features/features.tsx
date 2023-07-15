"use client"

import {HiOutlineArrowNarrowRight } from  "react-icons/hi"
import Image from "next/image"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import urlFor from "@/lib/urlFor"

const feater1 = "/images/features-1.jpg"
const feater2= "/images/features-2.jpg"

const data = {
    title: "CORE FEATURES",
    desc: "OUR ABILITY TO MAKE YOUR LAWN LOOK ITS BEST"
}

// const dataDetails:OurFeatures[] = [
//     {
//         name: "FORESTRY",
//         attributes: [
//             {
//                 id: 1,
//                 title: "MAINTENANCE"
//             },
//             {
//                 id: 2,
//                 title: "FERTILIZATION"
//             },
//             {
//                 id: 3,
//                 title: "IRRIGATION"
//             },

//         ],
//         image: "/images/features-1.jpg",
//     },
    
//     {
//         name: "COMMERCIAL",
//         attributes: [
//             {
//                 id: 1,
//                 title: "MAINTENANCE"
//             },
//             {
//                 id: 2,
//                 title: "FERTILIZATION"
//             },
//             {
//                 id: 3,
//                 title: "IRRIGATION"
//             },

//         ],
//         image: "/images/features-2.jpg",
//     },
// ]

const Features = () => {

    const [sliderData, setSLiderData] = useState<OurFeatures[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "ourFeatures"] {
           ...,
           "attribute": attribute[]->{
          title,
          id,
          }
          }`
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
    <>
        <div className="feater-bg__contnent mt-[70px] ">

            <div className=" flex items-center justify-center flex-col text-center h-[60vh]">
                <h3 className="text-[#339638] text-[18px] font-[700]">{data.title}</h3>
                <h1 className="lg:text-[46px] text-[36px] lg:p-[2rem] p-4 max-w-[750px] text-white font-[800]">{data.desc}</h1>
            </div>

        </div>

        {sliderData ? (
        <div className="features-container__styles">
                {sliderData.map((item,index) =>(

                    <div className="feature1-container" key={`${index}`}>

                        <div className="feature-img ">
                            <img src={urlFor(item.image).url()} alt="image" className=""/>
                        </div>
                        <div className="feature-content">
                            <div className="content">
                                <h1>{item.name}</h1>
                                {item.attribute?.map((attr) => (
                                <h3 key={attr.id}>
                                    {attr.title}
                                <div className="underline"/>
                                </h3>
                                ))}
                            
                                
                            </div>
                            <div className="btn">
                                <button><p>read more</p> <HiOutlineArrowNarrowRight/></button>
                            </div>
                        </div> 

                    </div>
                ))}
        </div>
        ):(
            <div className="flex justify-center">Loading ...</div>
        )}
    </>
  )
}

export default Features
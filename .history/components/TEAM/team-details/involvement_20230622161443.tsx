"use client"

import { client } from "@/lib/sanity.client"
import "../../../styles/team.scss"


import React, { useEffect, useState } from 'react'
import { groq } from "next-sanity"
import urlFor from "@/lib/urlFor"

const involvementData:Involvement = {
    title: "COLLABORATION & TEAM",
    description: "EVERY SINGLE OLIVE OIL HAS BEEN CAREFULLY CHOSEN BY OUR EXPERT",
    imageLogos: [
        {
            id: 1,
            image: "/images/portfolio/team-award1.png",
        },
        {
            id: 2,
            image: "/images/portfolio/team-award2.png",
        },
        {
            id: 3,
            image: "/images/portfolio/team-award3.png",
        },

    ],
    mainImage: "/images/team/team-intro-img.jpg"
}

const Involvement = () => {
    const [sliderData, setSLiderData] = useState<Involvement[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "involvement"] {
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
    <section className='team-intro-area'>
        {sliderData ? (
        <div className='container'>
          {sliderData.map((item, index) => (
            <div className="row" key={index}>
                <div className="col-xl-7 col-lg-7">
                <div className='team-intor-content'>
                    <div className='section-title'>
                    <span className="section-subtitle">{item.title}</span>
                    <h2 className="section-main-title mb-[45px]">{item.description}
                    </h2>
                    </div>
                    <div className='team-award-logo'>
                    {item?.imageLogos?.map((item) => (
                        <a href="#" key={item.id}>
                            <img src={urlFor(item.image).url()} alt="award" />
                        </a>
                     ))}
                    </div>
                </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                <div className='team-intro-thumb'>
                    <img src={urlFor(item.mainImage).url()} alt="team-intro"/>
                </div>
                </div>
            </div>
          ))}
        </div>
        ): (
            <div className="flex items-center justify-center">Loading ...</div>
        )}
  </section>
  )
}

export default Involvement
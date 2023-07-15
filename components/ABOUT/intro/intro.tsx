"use client"

import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import Link from "next/link"
import { useEffect, useState } from "react"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Intro = () => {
    const [sliderData, setSLiderData] = useState<AboutUsIntro[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "aboutusIntro"] {
            ...,
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

    <div className="about-area pt-[120px] pb-[90px]">
      {sliderData ? (
        <div className="container">
          {sliderData.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-6">
                <div className="about-thumb">
                  <img src={urlFor(item.image).url()} alt="main-image" />
                  <div className="about-thumb-meta">
                    <p>since from 2011</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="section-subtitle">{item.title}</span>
                    <h2 className="section-main-title">{item.description}</h2>
                  </div>
                  <p>{item.infoOne}</p>
                  <p >{item.infoTwo}.</p>
                  <div className="about-btn">
                    <Link href="/contact" className="fill-btn">
                      get in touch
                      < MdOutlineKeyboardArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ): (
        <div className="flex justify-center">Loading ...</div>
      )}
    </div>
    </>

  )
}

export default Intro
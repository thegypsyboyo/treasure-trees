"use client"

import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const about_thumb1 = "/images/about-thumb.jpg"
const about_thumb = "/images/contact-img.jpg"
// const data:AboutUsIntro[] = [
//     {
//         title: "about us",
//         description: "TREE PLANTING & FORESTY",
//         infoOne: "Most gardens consist of a mix of natural and constructed elements, although even natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.",
//         infoTwo: "Design affects human. It changes the view of life and the self-image. According to the opinion specialists, a good design is a space.",
//         image: about_thumb,
//         button: "get in touch",
//         time: "since from 2000"
//     }
// ]
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
    {/* <div className="intro-about__container">
        {sliderData?.map((item, index) =>( 
            <div key={`${index}`} className="content-intro__container">
                <div className="img-content__about">
                    <div className="img-contain">
                        <img src={urlFor(item.image).url()} alt="about-temp" />
                    </div>
                    <div className="content-back">
                        <p>{`${item.time}`}</p>
                    </div>
                </div>
                <div className="content-about__info">
                    <h4 className="about-title">{`${item?.title}`}</h4>
                    <h3 className="about-desc">{`${item.description}`}</h3>
                    <p className="about-info">{`${item.infoOne}`}</p>
                    <p className="about-info-two">{`${item.infoTwo}`}</p>
                    
                    <button>
                        <Link href="/">
                            <p>get in touch</p>
                            <MdOutlineKeyboardArrowRight/>
                        </Link>
                    </button>
                </div>
            </div>
        ))}
    </div> */}
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
                    <span className="section-subtitle">about us</span>
                    <h2 className="section-main-title mb-20">{item.title}</h2>
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
        <div>Loading ...</div>
      )}
    </div>
    </>

  )
}

export default Intro
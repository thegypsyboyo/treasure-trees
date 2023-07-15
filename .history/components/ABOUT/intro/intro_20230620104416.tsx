"use client"

import { client } from "@/lib/sanity.client"
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
    <div className="intro-about__container">
        {sliderData?.map((item, index) =>( 
            <div key={`${index}`} className="content-intro__container">
                <div className="img-content__about">
                    <div className="img-contain">
                        <img src={`${item.image}`} alt="about-temp" />
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
    </div>
  )
}

export default Intro
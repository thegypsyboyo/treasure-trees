'use client'
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsArrowRight } from "react-icons/bs"


// const contentData:HomeAbout = {
//     image: [
//         {
//             id: 1,
//             asset: "/images/donate/about-group-thumb1.jpg"
//         },
//         {
//             id: 2,
//             asset: "/images/donate/about-group-thumb2.jpg"
//         },
//         {
//             id: 3,
//             asset: "/images/donate/about-group-thumb3.jpg"
//         },
//         {
//             id: 4,
//             asset: "/images/donate/about-group-thumb4.jpg"
//         },
//         {
//             id: 5,
//             asset: "/images/donate/about-group-thumb5.jpg"
//         },
//         {
//             id: 6,
//             asset: "/images/donate/about-group-thumb6.jpg"
//         },
//         {
//             id: 7,
//             asset: "/images/donate/about-group-thumb7.jpg"
//         },

//     ],
//     description: "Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.",
//     skillTitle: [
//         {
//             title: "LANDSCAPING GROUND",
//             percentage: "55%"
//         },
//         {
//             title: "CARBON HYDRATION",
//             percentage: "90%"
//         },

//     ],
//     sinceFrom: "since from 2007",
//     title: "TREASURE TREES' AIM TO REGENERATION"

// }


const Foundation = () => {
    const [sliderData, setSLiderData] = useState<HomeAbout[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "homeAbout"] {
           ...,
           "image": image[]->{
          image,
          id
          },
           "skillTitles": skillTitles[]->{
          title,
          percentage
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
    console.log("DESCRIPTION :",sliderData?.map((item) => item.description))
    console.log("IMAGES :",sliderData?.map((item) => item.image?.map((img) => img.asset)))
      
  return (
    <>
    <div className="about-area">
        <div className="container">
            {sliderData ? (
            <div className="row">
                {sliderData.map((item, index) => (
                <div className="col-lg-6" key={index}>
                        <div className="about-thumb-group" >
                            {item?.image?.map((item, index) => (
                            <img className={`img-thumb-${item.id}`} src={item.asset} alt="img" key={index}/>
                            ))}
                        </div>
                </div>
                ))}
                <div className="col-lg-4">
                    <div className="about-content">
                        {sliderData.map((item, index) => (
                        <div className="section-title" key={index}>
                            <span className="section-subtitle">[ {item?.sinceFrom} ]</span>
                            <h2 className="section-main-title" >{item?.title}</h2>
                            <p className="">{item?.description}</p>
                            <div className="about-work-progress">
                                <div className="bd-skill--content">
                                     {item?.skillTitles?.flatMap((skill, index) => (
                                        <div className="bd-skill__wrapper" key={index}>
                                            <div className="bd-skill-title__wrapper">
                                                <h5 className="bd-skill--title">{skill.title}</h5>
                                                <span>{skill.percentage}</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{width:skill.percentage}}>
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="btn">
                                <Link href="/about" className="border-btn-rounded">
                                    learn more
                                    <BsArrowRight/>
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            ): (
                <div className="flex justify-center">Loading ...</div>
            )}
        </div>
    </div>
    </>
  )
}

export default Foundation
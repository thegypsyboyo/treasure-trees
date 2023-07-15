"use client"

import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import { BsArrowRight } from "react-icons/bs"

const Process:React.FC = () => {

    const workFlow:WorkFlow[] = [
        {
            image: "/images/services/work-icon1.png",
            title: "Land clearing",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Seedling care",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon3.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon3.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        }
    ]

    const [sliderData, setSLiderData] = useState<WorkFlow[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "workFlow"] {
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
    <div className="work-process-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <span className="section-subtitle">work flow</span>
                        <h2 className="section-main-title mb-45">how we work</h2>
                    </div>
                </div>
            </div>
            <div className="how-work-wrapper">
                {sliderData ? (
                <div className="work-steps" >
                {sliderData.map((work, index) => (  
                    <div className="work-step" key={index}>
                        <div className="process-workflow-border" />
                        <div className="work-step-icon">
                            <img src={urlFor(work.image).url()} alt="icon" />
                             <i>
                                <BsArrowRight/>
                            </i>
                        </div>
                        <h4>{work.title}</h4>
                        <p>{work.description}</p>
                    </div>
                ))}
                  
                </div>
                ):(
                    <div className="flex justify-center">Loading ...</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Process
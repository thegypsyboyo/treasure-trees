"use client"

import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image"
import { useEffect, useState } from "react";

const choose_bg = "/images/services/choose-bg.jpg";
const choose_icon ="/images/services/choose-icon1.png"
const choose_icon2 ="/images/services/choose-icon2.png"



const serviceData:ServiceUs[] = [
    {
        bgImage: "/images/services/choose-bg.jpg",
        serviceContents:  [
            {
                title: "QUALITY & RELIABILITY",
                description: "Most gardens consist of a mix of natural & constructed elements, although even very natural garden",
                icon: "/images/services/choose-icon1.png",
            },
            {
                title: "AWARD WINNING COMPANY",
                description: "Most gardens consist of a mix of natural & constructed elements, although even very natural garden",
                icon: "/images/services/choose-icon2.png",
            },
        ],
        subtitle: "why we make impact",
        title: "Our impact based on the numerous results",
    }
]



const ServiceUs = () => {


    const [sliderData, setSLiderData] = useState<ServiceUs[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "serviceUs"] {
          ...,
          "serviceUsContents": serviceUsContents[] -> {
            title,
            icon,
            description
          }
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
    <>
    {sliderData ? (
        <div>
        {sliderData?.map((item, index) => (
        <div className="service-us-choose" key={index}>
    
            <div className="choose-bg">
                <img src={item.bgImage} alt="choose-bg"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="choose-wrapper">
                            <div className="choose-inner">
                                <div className="choose-content">
                                    <div className="choose-title">
                                        <span className="choose-subtitle">{item.subtitle}</span>
                                        <h2 className="section-main-title">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="choose-list">
                                        {item?.serviceContents?.map((item, index) =>(
                                        <div className="irc-item choose-item" key={index}>
                                            <div className="irc-item-icon">
                                            <Image src={urlFor(item.icon).url()} width={60} height={60} alt="icon-imgss"/>    
                                            </div>
                                            <div className="irc-item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
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

export default ServiceUs
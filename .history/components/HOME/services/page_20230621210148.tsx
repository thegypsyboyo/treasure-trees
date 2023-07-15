"use client"

import Link from 'next/dist/client/link'
import { BsArrowRight } from 'react-icons/bs'
import '../../../styles/main.scss'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'
import urlFor from '@/lib/urlFor'

const ServiceInfo = () => {
    // const serviceData:ServiceData[] = [
    //     {
    //         icon: "/images/services/s-icon4.png",
    //         description: "The laying out and care of a plot of ground devoted partially or wholly.",
    //         image: "/images/services/service-sub2.jpg",
    //         slug: "GARDEN-LANDSCAPING",
    //         title: "GARDEN LANDSCAPING"
    //     },
    //     {
    //         icon: "/images/services/s-icon3.png",
    //         description: "The laying out and care of a plot of ground devoted partially or wholly.",
    //         image: "/images/services/service-sub1.jpg",
    //         slug: "GARDEN-LANDSCAPING",
    //         title: "GARDEN LANDSCAPING"
    //     },
    //     {
    //         icon: "/images/services/s-icon3.png",
    //         description: "The laying out and care of a plot of ground devoted partially or wholly.",
    //         image: "/images/services/service-sub1.jpg",
    //         slug: "GARDEN-LANDSCAPING",
    //         title: "GARDEN LANDSCAPING"
    //     },

    // ]
    const [sliderData, setSLiderData] = useState<Service[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
            const query = groq`*[_type=='service']{
                ...,
                allData->{
                  services[]{
                    title,
                    description
                  },
                  serviceList[]{
                    title,
                    id
                  }
                }
              } | order(_createdAt desc)`;
              
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
    <div className="service-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <span className="section-subtitle">our work</span>
                        <h2 className="section-main-title">what we do</h2>
                    </div>
                </div>
            </div>
            {sliderData ? (
            <div className="services-wrapper">
                <div className="row-info">
                        {sliderData.map((service, index) => (
                    <div className="col-lg-7" key={index}>
                        <div className="single-service" >
                            <div className="service-image">
                                <img src={urlFor(service.mainImage).url()} alt="img" />
                            </div>
                            <div className="service-content">
                                <div className="service-icon">
                                    <img src={urlFor(service.icon).url()} alt='service-icon'/>
                                </div>
                                <h4 className="service-title">
                                    <Link href={`/services/service-details/${service.slug.current}`}>{service.title}</Link>
                                </h4>
                                <p>
                                    {service.description}
                                </p>
                                <Link className='text-btn' href={`/services/service-details/${service.slug.current}`}>
                                    <BsArrowRight/>
                                    read more
                                    <BsArrowRight/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                   
                </div>
            </div>
            ):(
                <div className='flex justify-center'>Loading ...</div>
            )}
        </div>
    </div>
  )
}

export default ServiceInfo
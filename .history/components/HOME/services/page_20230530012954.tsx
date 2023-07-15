"use client"

import Link from 'next/dist/client/link'
import { BsArrowRight } from 'react-icons/bs'
import '../../../styles/main.scss'

const ServiceInfo = () => {
    const serviceData:ServiceData[] = [
        {
            icon: "/images/services/s-icon4.png",
            description: "The laying out and care of a plot of ground devoted partially or wholly.",
            image: "/images/services/service-sub2.jpg",
            slug: "GARDEN-LANDSCAPING",
            title: "GARDEN LANDSCAPING"
        },
        {
            icon: "/images/services/s-icon3.png",
            description: "The laying out and care of a plot of ground devoted partially or wholly.",
            image: "/images/services/service-sub1.jpg",
            slug: "GARDEN-LANDSCAPING",
            title: "GARDEN LANDSCAPING"
        },
        {
            icon: "/images/services/s-icon3.png",
            description: "The laying out and care of a plot of ground devoted partially or wholly.",
            image: "/images/services/service-sub1.jpg",
            slug: "GARDEN-LANDSCAPING",
            title: "GARDEN LANDSCAPING"
        },

    ]
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
            <div className="services-wrapper">
                <div className="row-info">
                        {serviceData.map((service, index) => (
                    <div className="col-lg-7" key={index}>
                        <div className="single-service" >
                            <div className="service-image">
                                <img src={service.image} alt="img" />
                            </div>
                            <div className="service-content">
                                <div className="service-icon">
                                    <img src={service.icon} alt='service-icon'/>
                                </div>
                                <h4 className="service-title">
                                    <Link href={`${service.slug}`}>{service.title}</Link>
                                </h4>
                                <p>
                                    {service.description}
                                </p>
                                <Link className='text-btn'  href={`${service.slug}`}>
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
        </div>
    </div>
  )
}

export default ServiceInfo
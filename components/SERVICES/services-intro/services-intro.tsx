'use client'

import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"
import urlFor from "../../../lib/urlFor"
import Link from "next/link"



type Props = {
    services: Service[];
}

const ServicesIntro = ({services}: Props) => {
  return (
    <div className="service-area">
        <div className="service-container">
            <div className="service-wrapper">
                <div className="row" >
                {services.map((service) =>(
                    <div className="col-lg-4 col-md-6" key={service._id}>
                        <div className="single-service single-service-default">
                            <div className="service-icon">
                                {service.mainImage && (
                                <Image src={urlFor(service?.mainImage).url()} width={200} height={200} alt="img-1"/>
                                )}

                            </div>
                            <div className="single-service-content">
                                <span className="service-number"></span>
                                <h4 className="service-title">
                                    {service.slug && (

                                    <Link href={`/services/service-details/${service.slug.current}`}>{`${service.title}`}</Link>
                                    )}

                                </h4>
                                <p>
                                   {`${service.description}`}
                                </p>
                                <Link className="text-btn" href={`/services/service-details/${service.slug.current}`}>
                                    <i className="fas fa-falong-arrow-right"><FaLongArrowAltRight/></i>
                                    read more
                                    <i className="fas fa-falong-arrow-right"><FaLongArrowAltRight/></i>
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

export default ServicesIntro
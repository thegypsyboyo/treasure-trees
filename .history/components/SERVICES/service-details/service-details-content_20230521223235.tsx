import Image from "next/image"
import { CSSProperties } from "react";
import { AiFillFileImage, AiFillFilePdf } from "react-icons/ai";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight, BsFillFilePdfFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import {TiTick} from "react-icons/ti"
import urlFor from "../../../lib/urlFor";

import "../../../styles/service-single.scss"


type Props = {
    service: Service;
}

export default function ServiceDetailsContent ( {service}:Props) {
  const allData = service.servicesSlugInformation;
  console.log(allData.map((data) => data.serviceImageOne))
  return (
    <div className="service-details pt-[120px] pb-[60px]">
        {allData.map((data,id) =>(
        <div className="container" key={id}>
            <div className="row">
                <div className="col-lg-9 col-md-12">
                    <div className="service-details-main mb-[60px]" >
                        <div className="service-image">
                            <Image 
                                src={urlFor(data?.image).url()}                                
                                width={500}
                                height={500}
                                alt="main-image" 
                                loading="lazy"
                            />

                        </div>
                        <h3 className="mb-[15px]">{service.title}</h3>
                        <p className="mb-[15px]">
                            {data.descriptionOne}
                        </p>
                        <p className="mb-[45px]">
                           {data.descriptionTwo}
                        </p>

                        <h3 className="mb-[25px]">how we works</h3>

                        <div className="how-work-wrapper">
                            <div className="working-steps">
                                {data?.services.map((item) =>(
                                    <div className="work-step" key={item.id}>
                                        <div className="work-icon-step"
                                            // style={{ '--arrow-rotation': item.arrow_degree } as CSSProperties}

                                        >
                                            <Image 
                                                src={urlFor(item?.image).url()}                                            
                                                width={100}
                                                height={100}
                                                alt={item.title}
                                            />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}                               
                          
                            </div>
                        </div>
                        <p className="mb-[55px]">
                           {data.descriptionThree}
                        </p>
                        <div className="service-sub-image">
                            {data.serviceImageOne && (
                            <Image 
                                src={urlFor(data.serviceImageOne).url()} 
                                alt="service-sub"
                                width={500}
                                height={500}
                            />
                            )}
                            {data.serviceImageTwo && (

                            <Image 
                              src={urlFor(data?.serviceImageTwo).url()}                                            

                                alt="service-sub"
                                width={500}
                                height={500}
                            />
                            )}
                        </div>
                        <div className="service-features mb-[60px]">
                            <h4>Core Features</h4>
                            <div className="service-feature-list">
                                {data.serviceList && data.serviceList.map((item) =>(
                                    <span key={item.id}>{item.title}<TiTick/></span>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-lg-3 col-md-8">

                    <div className="service-sidebar-wrapper">
                        <div className="sidebar-widget">
                            <h4 className="sidebar-widget-title">Our Services
                            </h4>
                            <div className="sidebar-service-list">
                                <ul>
                                    {data.sidebarServiceLink && data.sidebarServiceLink.map((item) =>(
                                        <li key={item.id}>
                                            <a href="/service">
                                                <BsArrowRight/>
                                               {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-materials">
                            <h4 className="sidebar-widget-title">Our Materials</h4>
                            <div className="sidebar-material-list">
                                <ul>
                                    {data?.sidebarMaterials && data.sidebarMaterials.map((item) =>(
                                        <li key={item.id}>
                                            <a href="#">
                                                <i className="before-svg">
                                                {/* {item.}                              */}
                                                </i>
                                                {item.title}
                                                <FaDownload className="after-svg"/>
                                            </a>
                                        </li> 
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-adv">
                          {data.sidebarImageAdd && (
                            <Image
                                src={urlFor(data?.sidebarImageAdd).url()}                                            
                                alt="adv" 
                                width={400}
                                height={400}                           
                            />
                          )}
                        </div>
                    </div>
                </div>
            </div>
        
           </div>
        
    ))}
    </div>
  )
}

"use client"
import Image from "next/image"
import { BsMap, BsPhone, BsPhoneFill, BsTelephone } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Map from "./map"

const shovle_img = "/images/shovle-img.png"

const ContactMap = () => {

  const latitude = 51.505;
  const longitude = -0.09;
  
  return (
    <div className="contact-map-area">
        <ddiv className="contact-map-shape">
            <Image src={shovle_img} width={300} height={300} alt="shovle" />
        </ddiv>
        <div className="contact-map__container">
            <div className="row">
                <div className="col-lg-8">
                  <div className="section-title">
                    <span className="section-subtitle">contact</span>
                    <h2 className="section-main-title">get in touch</h2>
                  </div>
                </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="map">
                  {/* Map goes here */}

                  {/* <Map lat={latitude} lng={longitude}/> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-wrapper-content info-wrapper-media">
                  <h4 className="contact-info-title">head quater</h4>
                  <div className="info-contact">
                    <ul>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <BsTelephone className="fas"/>
                          </div>
                          <p><a href="tel:1-800-700-600">1-800-700-600</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <MdEmail/>
                          </div>
                          <p>
                          <a href="mailto:info@bdevs-email.com">info@bdevs-email.com</a>                   
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <BsMap/>
                          </div>
                          <p>
                          <a href="#">60 East 65th Street, New York City, NY 10065</a>                        
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
              <div className="col-lg-4">
                <div className="info-wrapper-time">
                  <h4 className="contact-info-title">opening hours</h4>
                  <div className="info-contact-time">
                    <ul>
                      <li>
                        <div className="info-date">
                        <span>mon - thur</span>
                        <span>10:00 am - 8:00 pm</span>
                        </div>
                      </li>                
                      <li>
                        <div className="info-date">
                        <span>Sat - mon</span>
                        <span>10:00 am - 8:00 pm</span>
                        </div>
                      </li>                
                      <li>
                        <div className="info-date">
                        <span>friday</span>
                        <span>offday</span>
                        </div>
                      </li>                
                    </ul>
                  </div>
                </div>
              
              </div>
            </div>

        </div>

    </div>
  )
}

export default ContactMap
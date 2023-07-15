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

  const myData:ContactMap[] = [

    {
      infoMedia: [ 
        {
          email: "info@treasuretreeskenya.com",
          location: "Malindi, Kenia",
          phone: "095755733",
          title: ""
        }
      ],
      mapCoordinates: [
        { 
          latitude: "51.505",
          longitude: "-0.09"
        }
      ],

      infoTime: [
        {
          title: "opening hours",
          descriptionOne: "mon - thur",
          descriptionTwo: "10:00 am - 8:00 pm",
          descriptionThree: "Sat - mon",
          descriptionFour: "10:00 am - 8:00 pm",
          descriptionFive: "friday",
          descriptionSix: "offday"
        }
      ]

    }
  ]
  
  console.log(myData.map((item) => item.mapCoordinates))
  return (
    <div className="contact-map-area">
        <div className="contact-map-shape">
            <Image src={shovle_img} width={300} height={300} alt="shovle" />
        </div>
        {myData.map((data, index) => (
        <div className="contact-map__container" key={index}>
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
                {data.infoMedia.map((item, index) => (
                <div className="info-wrapper-content info-wrapper-media" key={index}>
                  <h4 className="contact-info-title">{item.title}</h4>
                  <div className="info-contact">
                    <ul>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <BsTelephone className="fas"/>
                          </div>
                          <p><a href="tel:1-800-700-600">{item.phone}</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <MdEmail/>
                          </div>
                          <p>
                          <a href="mailto:info@bdevs-email.com">{item.email}</a>                   
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <BsMap/>
                          </div>
                          <p>
                          <a href="#">{item.location}</a>                        
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                ))}
              
              </div>

              <div className="col-lg-4">
                {data.infoTime.map((item, index) =>(
                <div className="info-wrapper-time" key={index}>
                  <h4 className="contact-info-title">{item.title}</h4>
                  <div className="info-contact-time">
                    <ul>
                      <li>
                        <div className="info-date">
                        <span>{item.descriptionOne}</span>
                        <span>{item.descriptionTwo}</span>
                        </div>
                      </li>                
                      <li>
                        <div className="info-date">
                        <span>{item.descriptionThree}</span>
                        <span>{item.descriptionFour}</span>
                        </div>
                      </li>                
                      <li>
                        <div className="info-date">
                        <span>{item.descriptionFive}</span>
                        <span>{item.descriptionSix}</span>
                        </div>
                      </li>                
                    </ul>
                  </div>
                </div>
                ))}
              
              </div>
            </div>

        </div>
        ))}

    </div>
  )
}

export default ContactMap
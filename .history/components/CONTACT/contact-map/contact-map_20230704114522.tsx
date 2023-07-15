"use client"
import Image from "next/image"
import { BsMap, BsTelephone } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Map from "./map"
import { useEffect, useState } from "react"
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"

const shovle_img = "/images/shovle-img.png"

const ContactMap = () => {

 
  // const myData:ContactMap[] = [

  //   {
  //     infoMedia: [ 
  //       {
  //         email: "info@treasuretreeskenya.com",
  //         location: "Malindi, Kenia",
  //         phone: "+254 745672340",
  //         title: "Get in touch"
  //       }
  //     ],
  //     mapCoordinates: [
  //       { 
  //         latitude: "51.505",
  //         longitude: "-0.09"
  //       }
  //     ],
  //   }
  // ]
  // const lng = 39.8506; // Longitude of Watamu, Kenya
  // const lat = -3.3420; // Latitude of Watamu, Kenya
  const zoom = 10; // Zoom level
  
  // console.log(myData.map((item) => item.mapCoordinates))
  const [sliderData, setSLiderData] = useState<ContactMap[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);
  const [mapLocations, setMapLocations] = useState([]);


  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "contactMap"] {
          "coordinates":coordinates[]->{
            name,
            mapCoordinates[]->{
              latitude,
              longitude,
            },
          },
          "infoMedia":infoMedia[]->{
            title,
            phone,
            email,
            location,
          }
        } | order(_createdAt asc)`
        const response = await client.fetch(query);
        setMapLocations(
          response[0].coordinates.map((item: any) => ({
            name: item.name,
            coordinates: [item.mapCoordinates[0].longitude, item.mapCoordinates[0].latitude]
          }))
        );
        setIsLoading(false);
        setSLiderData(response);
        console.log("LOCATION INFORMATION... ",response)

      } catch (error) {
        console.error("Error fetching data: ", error)
        setIsLoading(false);
      }

    }
    fetchSliderData();
  }, [])

  const locations = [
    {
      name: 'Arabuko Farm',
      coordinates: [39.8506, -3.3420], // First coordinate
    },
    {
      name: 'Marafa Kenia',
      coordinates: [36.817223, -1.286389], // Second coordinate
    },
    // Add more locations as needed
  ];

  console.log("mapLocations: ", mapLocations)
  console.log("locations: ", locations)
  return (
    <>
    <div className="contact-map-area">
        <div className="contact-map-shape">
            <Image src={shovle_img} width={300} height={300} alt="shovle" />
        </div>
        {sliderData ? (
          <div>
            {sliderData.map((data, index) => (
            <div className="contact-map__container" key={index}>
                <div className="row">
                    <div className="col-lg-8">
                      <div className="section-title">
                        <span className="section-subtitle">visit us</span>
                        <h2 className="section-main-title">Visit us TODAY</h2>
                      </div>
                    </div>
                </div>
    
                <div className="row">
                  <div className="col-lg-4s">
                      <div className="map">
                        <Map locations={mapLocations} zoom={3} />                
                      </div>
                  </div>
                  <div className="col-lg-4s">
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
                              <p><a href={`tel:${item.phone}`}>{item.phone}</a></p>
                            </div>
                          </li>
                          <li>
                            <div className="single-contact">
                              <div className="icon">
                                <MdEmail/>
                              </div>
                              <p>
                                <a className="mail-info" href={`mailto:${item.email}`}>{item.email}</a>                   
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
                </div>
    
            </div>
            ))}
          </div>
          ): (
           <div className="flex justify-center items-center">Loading ...</div>
        )}

    </div>
    </>
  )
}

export default ContactMap
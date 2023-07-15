"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsInstagram } from 'react-icons/bs'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitch } from 'react-icons/fa';

import "../../../styles/team.scss"
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';



const Team = () => {

  const [sliderData, setSLiderData] = useState<TeamMember[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "team"] {
          ...,
          "socials": socials[]->{
          platform,
          url
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
    <React.Fragment>
      <div className="team-area">
          <div className="container">
            {sliderData ? (
            <div className="team-wrapper hover-img-border">
              <div className="row">

                {sliderData.map((item, index) => (

          
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                  <div className="team-single">
                    <div className='team-member-wrapper'>
                      <div className='member-img'>
                        <Link href="#">
                          <img src={item.image} alt='member'/>
                        </Link>
                      </div>
                      <div className='member-content'>
                        <span className="member-designation">{item.position}</span>
                        <h4 className="member-name">
                          <Link href="/team-details/1">{item.name}</Link>
                        </h4>
                        <div className='social-links-team'>
                          <ul>
                            {item.socials.map((social, index) => (       
                            <li key={index}>
                              <a href={social.url} rel="noreferrer noopener" target="_blank">
                                {/* <FaFacebookF/> */}
                                {social.platform === "facebook" && <FaFacebookF/>}
                                {social.platform === "instagram" && <FaInstagram/>}
                                {social.platform === "linkedin" && <FaLinkedinIn/>}
                                {social.platform === "twitter" && <FaTwitter/>}
                                {social.platform === "twitch" && <FaTwitch/>}
                                {social.platform === "youtube" && <FaYoutube/>}
                                
                                
                              </a>
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
            ): (
              <div className='flex items-center'>Loading ...</div>
            )}
          </div>
      </div>

      
    </React.Fragment>
  )
}

export default Team
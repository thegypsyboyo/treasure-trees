"use client"

import React, { useEffect, useState } from 'react'
import IntroVideo from './intro-video'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';


const AboutVideo:React.FC = () => {
  const [sliderData, setSLiderData] = useState<AboutVideo[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "aboutusVideo"] {
          ...,
        } | order(_createdAt desc)`
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
        <IntroVideo 
            channel="youtube"
            description='Something about the image'
            videoId='zO9RzrhYR-I'
            bgImage="/images/donate/video-thumb.jpg"    
        />
  )
}

export default AboutVideo
"use client"

import React, { useEffect, useState } from 'react'
import IntroVideo from './intro-video'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';


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

  if (!sliderData) {
    return (
      <div>Loading ...</div>
    )
  }
  return (
    <>
          {sliderData?.map((item, index) => (
          <div key={index}>
              <IntroVideo 
                  channel={item.channel}
                  description="Watch our latest video on how to improve productivity"
                  videoId={item.videoId}
                  bgImage={urlFor(item.bgImage).url()}
              />
          </div>
          ))}
    </>
  )
}

export default AboutVideo
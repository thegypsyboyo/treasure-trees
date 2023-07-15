"use client"
import React, { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
 
import PageIntro from './pageIntro'
import { data } from 'autoprefixer'
const query = groq`*[_type == 'sliderInfo'] {
    ...,
    "sliders":sliders[]->{
      image,
      description,
      title
    },
  }`

// console.log(sliderData.sliders)
const SliderPage = () => {
    const [sliderData, setSliderData] = useState(null);
    useEffect(() => {

    const fetchSliderData = async () => {
        try {
        const data = await client.fetch(query);
        console.log("SLIDER DATA: ", data)
        setSliderData(data);
        } catch(error) {
        console.log("Error fetching slider data: ", error)
        }
    };

    fetchSliderData();

    }, [])

    if (!sliderData) {
    return(
        <p> Loading data ...</p>
    )
    }
    return(
        <PageIntro sliderData={sliderData}/>
    )
}

export default SliderPage
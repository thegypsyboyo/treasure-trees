"use client"
import React, { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
 
import PageIntro from './pageIntro'
const query = groq`*[_type == 'sliderInfo'] {
    ...,
    "sliders":sliders[]->{
      image,
      description,
      title
    },
}`

// console.log(sliderData.sliders)
export default async function SliderPage() {
   
    const data = await client.fetch(query);
    return(
        <PageIntro dataSlider={data}/>
    )
}

// export default SliderPage
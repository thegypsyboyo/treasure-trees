'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation, Autoplay} from 'swiper';
import {HiOutlineArrowNarrowRight} from  "react-icons/hi"

import '../../../styles/main.scss'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Link from 'next/link';

import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import React, { useEffect, useState } from 'react';
import urlFor from '@/lib/urlFor';

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const dataSlider:IntroSlider = {
  activeReviews: "200+",
  sinceFrom: "since from 2007",
  sliders: [
    {
      description: "regeneration activities to restore the dry lands. Planting trees around schools and making the water project to provide water to locals",
      image: "/images/banner-1.jpg",
      title: "Regeneration Activities"
    },
    {
      description: "regeneration activities to restore the dry lands. Planting trees around schools and making the water project to provide water to locals",
      image: "/images/women.jpg",
      title: "Regeneration Activities"
    },
    {
      description: "regeneration activities to restore the dry lands",
      image: "/images/banner-2.jpg",
      title: "Camping & Farming"
    },

  ]
}
// console.log(dataSlider.sliders?.map((item) => item.description))

const query = groq`*[_type == 'sliderInfo'] {
  ...,
  "sliders":sliders[]->{
    image,
    description,
    title
  },
}`

type Props = {
  dataSlider:IntroSlider
}

const pageIntro = () => {

  const [sliderData, setSLiderData] = useState<IntroSlider[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "sliderInfo"] {
          sinceFrom,
          activeReviews,
          sliders[] -> {
            image,
            description,
            title
          }
        }`
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

  // if (isLoading) {
  //   return(
  //     <div
  //     className="mt-20 ml-auto mr-auto flex h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //     role="status">
  //     <span
  //       className="!absolute left-[50%] !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  //       >Loading...</span
  //     >
  //   </div>
  //   )
  // }
  // console.log("sliderData",sliderData)

  console.log("sliderData.sinceFrom", sliderData?.map((item) => item.sinceFrom));
  
  const mapped = sliderData?.map((item) => item.activeReviews)
  console.log("Mapped Data: ", mapped)

  return (
    <>
    {sliderData?.map((data, index) =>(
    <section className='page-intro' key={index} >
      <Swiper 
      className='swiper-wrapper'
      navigation={false}
      loop={true}
      effect='fade'
      autoplay={{ 
        delay: 8000,
        disableOnInteraction: false,
      }}
      >
        {data.sliders?.map((item, index) =>(
          <SwiperSlide className="swiper" key={index}>
            <div className="page-intro__slide relative">
              <div className="single-banner" >
                <div className="banner-img" style={{backgroundImage: `url(${urlFor(item.image).url()})`}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="banner-content">
                        <div className="banner-meta-text">
                            <span>[ {data.sinceFrom} ]</span>
                        </div>
                        <h1 className="banner-title">{item.title}</h1>
                        <div className="banner-text">
                          <p>{item.description}
                          </p>
                        </div>
                        <div className="banner-btn">
                          <div className="banner-meta-review">
                            <div className="meta-review-thumb">
                              <img src="/images/team/meta-review-thumb.png" alt="reviews" />
                            </div>
                            <div className="meta-review-text">
                              <span>{data.activeReviews}</span>
                              Active reviews
                            </div>
                          </div>
                          <Link href="/contact" className='fill-btn-rounded'>
                            get in touch
                            <HiOutlineArrowNarrowRight/>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-ld-4" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      

    </section>   
    ))}
    </>
  )
}

export default pageIntro
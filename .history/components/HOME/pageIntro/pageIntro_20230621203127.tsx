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

  return (
    <>
    {sliderData ? (
      <div>
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
      </div>
    ): (
      <div className='flex justify-center'>Loading ...</div>
    )}
    </>
  )
}
export default pageIntro
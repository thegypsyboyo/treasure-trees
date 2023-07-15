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
import { useEffect, useState } from 'react';

SwiperCore.use([EffectFade, Navigation, Autoplay]);

// const dataSlider:IntroSlider = {
//   activeReviews: "200+",
//   sinceFrom: "since from 2007",
//   sliders: [
//     {
//       description: "regeneration activities to restore the dry lands. Planting trees around schools and making the water project to provide water to locals",
//       image: "/images/banner-1.jpg",
//       title: "Regeneration Activities"
//     },
//     {
//       description: "regeneration activities to restore the dry lands. Planting trees around schools and making the water project to provide water to locals",
//       image: "/images/women.jpg",
//       title: "Regeneration Activities"
//     },
//     {
//       description: "regeneration activities to restore the dry lands",
//       image: "/images/banner-2.jpg",
//       title: "Camping & Farming"
//     },

//   ]
// }
// console.log(dataSlider.slider?.map((item) => item.description))

const query = groq`*[_type == 'sliderInfo'] {
  ...,
  "sliders":sliders[]->{
    image,
    description,
    title
  },
}`

const pageIntro = () => {
  const [sliderData, setSliderData] = useState<IntroSlider | null>(null);
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
  console.log(sliderData.sliders)
  return (
    <>
    <div>{sliderData.sinceFrom}</div>
    <p>Content</p>
    </>
    // <section className='page-intro' >
    //   <Swiper 
    //   className='swiper-wrapper'
    //   navigation={false}
    //   loop={true}
    //   effect='fade'
    //   autoplay={{ 
    //     delay: 8000,
    //     disableOnInteraction: false,
    //   }}
    //   >
    //     {sliderData.sliders?.map((item, index) =>(
    //       <SwiperSlide className="swiper" key={index}>
    //         <div className="page-intro__slide relative">
    //           <div className="single-banner" >
    //             <div className="banner-img" style={{backgroundImage: `url(${item.image})`}} />
    //             <div className="container">
    //               <div className="row">
    //                 <div className="col-lg-8 col-md-12">
    //                   <div className="banner-content">
    //                     <div className="banner-meta-text">
    //                         <span>[ {sliderData.sinceFrom} ]</span>
    //                     </div>
    //                     <h1 className="banner-title">{item.title}</h1>
    //                     <div className="banner-text">
    //                       <p>{item.description}
    //                       </p>
    //                     </div>
    //                     <div className="banner-btn">
    //                       <div className="banner-meta-review">
    //                         <div className="meta-review-thumb">
    //                           <img src="/images/team/meta-review-thumb.png" alt="reviews" />
    //                         </div>
    //                         <div className="meta-review-text">
    //                           <span>{sliderData.activeReviews}</span>
    //                           Active reviews
    //                         </div>
    //                       </div>
    //                       <Link href="/contact" className='fill-btn-rounded'>
    //                         get in touch
    //                         <HiOutlineArrowNarrowRight/>
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-ld-4" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

      

    // </section>
  )
}

export default pageIntro
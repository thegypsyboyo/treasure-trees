"use client"

import Link from 'next/link'
import '../../../styles/portfolio.scss'
import { useState, useRef, useEffect} from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation, Autoplay} from 'swiper';
// import Lightbox from 'react-image-lightbox'

// import 'react-image-lightbox/style.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/css';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';

// interface PortfolioItem {
//     image: string;
//     title: string;
//     budget: string;
//     description: string;
//     category: string[];
// }

SwiperCore.use([Navigation, Autoplay]);


type Props = {
    gallery:PortfolioItem[];
}

// const data:PortfolioItem[] = [
//      {
//         title: "mentorship",
//         description: "Mowing the trees",
//         budget: "14K Budget",
//         image: "/images/portfolio/portfolio-24.jpg",
//         category : ["Events"],
//      },
//      {
//         title: "gardening",
//         description: "JUNK REMOVAL",
//         image: "/images/portfolio/portfolio-25.jpg",
//         budget: "14K Budget",
//         category : ["People"],
//      },
//      {
//         title: "programs",
//         description: "WATERING PLANTs",
//         image: "/images/portfolio/portfolio-26.jpg",
//         budget: "14K Budget",
//         category : ["Water", "Events"],
//      },
//      {
//         title: "gardening",
//         description: "Mowing the trees",
//         image:"/images/portfolio/portfolio-27.jpg",
//         budget: "14K Budget",
//         category : ["Planting"],
//      },
//      {
//         title: "carbon cleaning",
//         description: "LAWN AND GARDEN MAINTENANCE",
//         image: "/images/portfolio/portfolio-28.jpg",
//         budget: "14K Budget",
//         category : ["Water", "Events"],
//      },
//      {
//         title: "schools",
//         description: "TREE-TRIMMING & REMOVAL",
//         image:"/images/portfolio/portfolio-29.jpg",
//         budget: "14K Budget",
//         category : ["Water"],
//      },
// ]
const PhotoGallery:React.FC = () => {
   


    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [filteredPortfolioItems, setFilteredPortfolioItems] = useState<PortfolioItem[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('All');

    
    const swiperRef = useRef<SwiperCore | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

   
  useEffect(() => {
    const query = groq`*[_type == 'portfolio']{
      title,
      slug,
      description,
      image,
      category,
    }`
    client.fetch(query)
    .then(data => {
      setPortfolioItems(data);
      setFilteredPortfolioItems(data);
    })
    .catch(console.error)
  }, [])

useEffect(() => {
        // filter items based on their active filter
        if (activeFilter === "All") {
            setFilteredPortfolioItems(portfolioItems)
        } else {
            const filterData = portfolioItems?.filter((item) => item.category.includes(activeFilter));
            setFilteredPortfolioItems(filterData);
        }
    }, [activeFilter, portfolioItems])

    const handleFilterClick = (category: string) => {
        setActiveFilter(category)
    }

    const handlePrevClick = () => {
        if (swiperRef.current !== null) {
          swiperRef.current.slidePrev();
        }
    };
    const handleNextClick = () => {
        if (swiperRef.current !== null) {
          swiperRef.current.slideNext();
        }
    };


  return (
        <div className="portfolio-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span className="section-subtitle">case study</span>
                            <h2 className="section-main-title mb-45">OUR TREES & PLANTS</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-tab">
                            <nav>
                            <div className='nav nav-tabs'>
                                {['All', 'Events', 'Water', 'People', 'Planting'].map((category) => (
                                <button
                                key={category}
                                onClick={() => handleFilterClick(category)}
                                className={`nav-link ${activeFilter === category ? 'item-active' : 'nav-link'}`} 
                                >
                                {category}
                                </button>
                                ))}
                            </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="portfolio-tab-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-wrapper">
                                <Swiper 
                                    className="swipper-in"
                                    loop={true}
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    onSwiper={(swiper) => {
                                        // store the swiper object reference
                                        swiperRef.current = swiper;
                                    }}
                                    breakpoints={{
                                        920: {
                                          slidesPerView: 2,
                                          autoplay: {
                                            delay: 5000
                                          }

                                        },
                                        768: {
                                          slidesPerView: 2,
                                          autoplay: {
                                            delay: 5000
                                          }

                                        },
                                        480: {
                                          slidesPerView: 1,
                                          autoplay: {
                                            delay: 5000
                                          }
                                        },
                                    }}
                                >
                                    <div className="swiper-wrapper">
                                        {filteredPortfolioItems?.map((item,index) => (
                                        <SwiperSlide key={index} className="swiper-slide">
                                            <div className="swiper-slidessess">
                                                <div className="portfolio-single">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio/portfolio-details/${item.slug.current}`}>
                                                                <img 
                                                                    src={urlFor(item.image).url()} 
                                                                    alt="image" 
                                                                    // onClick={() => setLightboxIndex(index)}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="meta-text">
                                                                            <span>{item.title}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="meta-text">
                                                                            <div className="project-budget">{item.budget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title">
                                                                    <Link href={`/portfolio/portfolio-details/${item.slug.current}`}>{item.description}</Link>
                                                                </h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio/portfolio-details/${item.slug.current}`} className="icon-btn">
                                                                    <BsArrowRight/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        ))}
                                    </div>
                                    {/* {lightboxIndex !== -1 && (
                                        <Lightbox
                                            mainSrc={portfolioItems[lightboxIndex].image}
                                            nextSrc={portfolioItems[(lightboxIndex + 1) % portfolioItems.length].image}
                                            prevSrc={portfolioItems[(lightboxIndex + portfolioItems.length - 1) % portfolioItems.length].image}
                                            onCloseRequest={() => setLightboxIndex(-1)}
                                            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + portfolioItems.length - 1) % portfolioItems.length)}
                                            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % portfolioItems.length)}
                                        />
                                    )} */}
                                    <div className="portfolio-nav">
                                        <div className="portfolio-button-prev portfolio-1-nav-btn " onClick={handlePrevClick}>
                                            <BsArrowLeft/>
                                        </div>
                                        <div className="portfolio-button-next portfolio-1-nav-btn " onClick={handleNextClick}>
                                            <BsArrowRight/>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            

            </div>
        </div>
  )
}

export default PhotoGallery;
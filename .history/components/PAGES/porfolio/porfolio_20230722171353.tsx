"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';

import '../../../styles/portfolio.scss'
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';
import {motion} from "framer-motion"


type Props = {
  portfolio: PortfolioItem[];
}


const Porfolio = ({portfolio}:Props) => {

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [filteredPortfolioItems, setFilteredPortfolioItems] = useState<PortfolioItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const shuffleArray = (arr: any[]) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };

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
    // filter portfolio items based on active filter
    if (activeFilter === 'All') {
      setFilteredPortfolioItems(portfolio);
    } else {
      const filteredItems = portfolioItems.filter((item) => item.category.includes(activeFilter));
      setFilteredPortfolioItems(filteredItems);
    }
  }, [activeFilter, portfolioItems]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredPortfolioItems(shuffleArray(portfolio));
    } else {
      const filteredItems = portfolio.filter((item) => item.category.includes(category));
      setFilteredPortfolioItems(shuffleArray(filteredItems));
    }
    // setActiveFilter(category);
  };


  const shuffleVariant = {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
    transition: { duration: 0.5 },
  };
  
  return (
    <div className='portfolio-area pt-[120px] pb-[120px]'>
      <div className='container'>
        <div className='porfolio-wrapper'>
          <div className='portfolio-tab'>
            <nav className=''>
              <div className='nav nav-tabs'>
                {['All', 'Events', 'Gardening', 'People', 'Plants'].map((category) => (
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
          <div className='portfolio-tab-content'>
            <div className="tab-content">
              <div className='tab-pane'>
                <div className='portfolio-wrapper portfolio-hover-items-wrapper'>
                  {filteredPortfolioItems.map((item, index) => (
                    <motion.div 
                    layout
                    {...shuffleVariant}
                    className='portfolio-single portfolio-hover-style' key={index}>       
                      <div className='portfolio-thumb'>
                        {/* {item.singlePortfolioDatas ? ( */}
                          <Link href={`/portfolio/portfolio-details/${item.slug.current}`}>
                            <img src={urlFor(item?.image).url()} alt="image" />
                          </Link>
                        {/* ): (
                         <span className="flex items-center justify-center">No image data found</span>
                        )} */}
                          <div className='portfolio-content'>
                            <a className='portfolio-hover-bg'/>
                            <div className='portfolio-inner'>
                              <span className="portfolio-tag">{item.title}</span>
                              <h4 className='portfolio-title'>
                                <Link href={`/portfolio/portfolio-details/${item.slug.current}`}>{item.description}</Link> 
                              </h4>
                              <Link  href={`/portfolio/portfolio-details/${item.slug.current}`} className="icon-btn">
                                  <CgArrowLongRight/>
                              </Link>    
                                                                                 
                            
                            </div>
                          </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Porfolio
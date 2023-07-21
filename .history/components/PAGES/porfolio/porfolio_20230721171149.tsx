"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';

import '../../../styles/portfolio.scss'
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';


type Props = {
  portfolio: PortfolioItem[];
}


const Porfolio = ({portfolio}:Props) => {

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [filteredPortfolioItems, setFilteredPortfolioItems] = useState<PortfolioItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

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
      setFilteredPortfolioItems(portfolioItems);
    } else {
      const filteredItems = portfolioItems.filter((item) => item.category.includes(activeFilter));
      setFilteredPortfolioItems(filteredItems);
    }
  }, [activeFilter, portfolioItems]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
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
                    <div className='portfolio-single portfolio-hover-style' key={index}>       
                      <div className='portfolio-thumb'>
                        {item.singlePortfolioDatas && (
                          <Link href={`/portfolio/portfolio-details/${item.slug.current}`}>
                            <img src={urlFor(item.image).url()} alt="image" />
                          </Link>
                        // ): (
                        //   <Link href="#">
                        //     <img src={urlFor(item.image).url()} alt="image" />
                        // </Link>
                        )}
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
                    </div>
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
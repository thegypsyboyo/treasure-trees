"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import urlFor from '../../../lib/urlFor';
import "../../../styles/causes.scss"
// import '../../../styles/portfolio.scss'

type Props = {
  causes: CausesItem[];
}

const Causes = ({causes}:Props) => {
  // console.log("All The Causes", causes)
  
  // const causesData:CausesItem[] =  [
  //   {
  //     id: 1,
  //     amountDonated: "200",
  //     amountTargeted: "5,000",
  //     category: ["Water", "Planting"],
  //     image: "/images/donate/donation-detail-6.jpg",
  //     description: "SOme content about donation into Medicine",
  //     title:"Plastic Recycle",
  //     estimatePercentage: 86,
  //     slug: "plastic-recycle"
  //   },
  //   {
  //     id: 2,
  //     amountDonated: "200",
  //     amountTargeted: "5000",
  //     category: ["Clean Water", "Forestry"],
  //     image: "/images/donate/donation-detail-4.jpg",
  //     description: "Some content about donation into Schools",
  //     title:"Lake Cleaning",
  //     estimatePercentage: 40,
  //     slug: "lake-cleaning"
  //   },
  //   {
  //     id: 3,
  //     amountDonated: "1,200",
  //     amountTargeted: "20,000",
  //     category: ["Clean Water", "Cleaning"],
  //     image: "/images/donate/donation-detail-7.jpg",
  //     description: "Some content about donation into Schools",
  //     title: "Lake Cleaning",
  //     estimatePercentage: 60,
  //     slug: "lake-recycle"
  //   },
  //   {
  //     id: 4,
  //     amountDonated: "2,000",
  //     amountTargeted: "50,000",
  //     category: ["Clean Water", "Cleaning"],
  //     image: "/images/donate/donation-detail-2.jpg",
  //     description: "Some content about donation into Schools",
  //     title: "Forest Cleaning",
  //     estimatePercentage: 60,
  //     slug: "forest-cleaning"
  //   },
  // ]
  
  const [causesItem, setCausesItem] = useState(causes); 
  const [filteredCauesItems, setFilteredCausesItems] = useState(causes);
  const [activeFilter, setActiveFilter] = useState<string>("All");


  useEffect(() => {
    setCausesItem(causes)
    setFilteredCausesItems(causes)
  }, [])

  useEffect (() => {
    // filter causes item based on their active filters;
    if (activeFilter === "All") {
      setFilteredCausesItems(causesItem);
    } else {
      const filterData = causesItem.filter((item) => item.category.includes(activeFilter));
      setFilteredCausesItems(filterData);
    }
  }, [activeFilter, causesItem]);

  const handleFilterClick = (category: string)  => {
    setActiveFilter(category);
  }

  return (
    <div className='portfolio-area pt-[120px] pb-[120px]'>
      <div className="container">
        <div className="porfolio-wrapper">
              <div className='row-title'>
                <div className="col-lg-7">
                  <div className="section-title">
                    <div className="overlay-title">causes</div>
                    <span className="sub-title">-- causes --</span>
                    <h2 className="title">Featured Causes</h2>
                  </div>
                </div>
              </div>
              <div className='row-content'>
                  <div className='col-lg-3'>
                      {filteredCauesItems.map((item, index) => (
                        <div className='portfolio-single portfolio-hover-style' key={index}>       
                              <div className='portfolio-thumb'>
                                <Link href={`/donate/donation-details/${item.slug.current}`} className='img-thumb'>
                                  {item.image && (
                                  <img src={urlFor(item.image).url()} alt="image" />
                                  )}
                                </Link>
                                <Link href="causes.html" className="tag">
                                  <span>{item.category}</span>
                                </Link>
                              </div>
                              <div className='portfolio-content'>
                                  <span className="portfolio-tag">{item.title}</span>
                                  <h4 className='portfolio-title'>
                                    <span>{item.description}</span> 
                                  </h4> 
                                  <div className="diation-details">
                                    <div className="progressbar-container">
                                      <div className="progressbar-nav">
                                          <div className="inner" style={{width: item.estimatePercentage + "%"}}></div>
                                      </div>  
                                      <div className="give-goal">
                                        <div className="raised">
                                          <span>${item.amountDonated}  </span>
                                          <p className='donated'>of  ${item.amountTargeted} raised</p>
                                        </div>
                                        <div className="donate-btn">
                                          <Link href={`/donate/donation-details/${item.slug.current}`}>Donate</Link>
                                        </div>
                                      </div>
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
  )
}

export default Causes
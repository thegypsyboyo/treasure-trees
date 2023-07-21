"use client"

import { useState } from "react"
import Link from "next/link"
import { BiPlus, BiMinus } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"

import "../../../styles/portfolio-detatils-content.scss"
import urlFor from "../../../lib/urlFor"


  
type Props = {
    portfolio: PortfolioItem;
    allPortfolio: PortfolioItem[];
}

const PortfolioDetailsContent = ({portfolio,allPortfolio}: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [iconRotation, setIconRotation] = useState(0); // initialize the rotation angle to 0

    const toggleIconRotation = () => {
        // update the rotation angle based on the current value
        setIconRotation(prevRotation => prevRotation + 180);
      };


    const onAccordionClick = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };


    const singlePortfolioData = portfolio.singlePortfolioDatas; 
    const QnAData = singlePortfolioData?.flatMap((item) => (item.questionAnswers.map((data) => ({
        question: data.question,
        answer : data.answer
    }))))
    // Dynamically split the Q&A data into two separate arrays
    const halfLength = Math.ceil(QnAData?.length / 2);
    const firstHalf = QnAData?.slice(0, halfLength);
    const secondHalf = QnAData?.slice(halfLength);
    

    // NEXT and PREVIOUS Portfolios;
    // 1. Create a query to fetch every portfolio

    // console.log(allPortfolio)
    const currentSlug = portfolio.slug?.current;
    const currentIndex = allPortfolio?.findIndex((item:PortfolioItem) => item.slug.current == currentSlug)
    
    // Find previous and next items
    const prevItem = allPortfolio[currentIndex - 1];
    const nextItem = allPortfolio[currentIndex + 1];

  return (

    <>
    {portfolio.singlePortfolioDatas ? (
        <section className="portfolio-details-area">
            {portfolio.singlePortfolioDatas?.map((item, index) => (       
            <div className="container" key={index}>
                <div className="porfolio-details-wrapper">
                    <div className="portfolio-thumb">
                        <img src={urlFor(item.mainImage).url()} alt="main-image"/>
    
                    </div>
                    <div className="portfolio-meta-wrapper">
                        <div className="portfolio-meta">
                            <div className="meta-list">
                                <div className="meta-list-item">
                                    <span>Date:</span>
                                    <p>{new Date(item._createdAt).toLocaleDateString(
                                        "en-Us", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }
                                        )}       
                                    </p>
                                </div>
                                <div className="meta-list-item">
                                    <span>Author:</span>
                                    <p>{item.quoteAuthor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mb-[20px] mt-[20px]">
                       {item.portfolioDescriptionOne}
                    </p>
                    <p>
                        {item.portfolioDescriptionTwo}
                    </p>
    
                    <div className="portfolio-sub-image">
                        {item.portfolioSubImage.map((item, index) => (
                            <img src={urlFor(item).url()} alt="sub-img-1" key={index}/>
                        ))}
                    </div>
    
                    <div className="porfolio-quote">
                        <div className="quote-icon">
                            <img src="/images/portfolio/qoute.png" alt="quote"/>
                            
                        </div>
                        <div className="quote-content">
                            <p>
                                {item.quoteInfo}
                            </p>
                            <div className="author-name">
                                {item.quoteAuthor}
                                <span>-{item.authorPosition}</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="portfolio-faq-wrapper">
                        <h4>some question &amp; answers</h4>
                        <p className="mb-[35px]">
                           {item.informationOnQuestion}
                        </p>
                        <div className="faq-wrapper">
                            <div className="gm-faq gm-faq-2coluumn">
                                <div className="accordion">
                                        <div className="gm-faq-group" >
                                        {firstHalf.map((item, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header">
                                                    <button className="accordion-btn" onClick={() => {onAccordionClick(index); toggleIconRotation()}}>
                                                    {item.question}
                                                    <div className="plus">
                                                        {activeIndex === index ? <BiMinus style={{ transform: `rotate(${iconRotation}deg)` }}/> : <BiPlus style={{ transform: `rotate(${iconRotation}deg)` }}/>}
                                                    </div>
                                                    </button>
                                                </h2>
                                                <div  className={`accordion-collapse ${activeIndex ===  index ? 'open' : 'accordion-close'}`}
                                                     style={
                                                        activeIndex === index
                                                          ? { maxHeight: "1000px" }
                                                          : { maxHeight: "0px" }
                                                      }>
                                                        <div className="accordion-body">
                                                            {item.answer}
                                                        </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="gm-faq-group" >
                                        {secondHalf.map((item, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header">
                                                    <button className="accordion-btn" onClick={() => onAccordionClick(index + halfLength)}>
                                                    {item.question}
                                                    <div className="plus">
                                                    {activeIndex === index + halfLength ? <BiMinus/> : <BiPlus/>}
                                                    </div>
                                                    </button>
                                                </h2>
                                                <div    className={`accordion-collapse ${activeIndex === index + halfLength ? 'open' : 'accordion-close'}`}
                                                 style={activeIndex === index + halfLength ? { maxHeight: '1000px' } : { maxHeight: '0px' }}
                                                >
                                                        <div className="accordion-body">
                                                            {item.answer}
                                                        </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                       
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="portfolio-nav-wrapper">
                        <div className="portfolio-nav-items">
                            {prevItem ?  (                      
                            <div className="portfolio-single">
                                <div className="portfolio-image">
                                    <Link href={`/portfolio/portfolio-details/${prevItem.slug.current}`}>
                                        <img src={urlFor(prevItem.image).url()} alt="portfolio-1"/>
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <span>Prev Case</span>
                                    <h4 className="portfolio-title">
                                        <Link href={`/portfolio/portfolio-details/${prevItem.slug.current}`}>{prevItem.title}</Link>
                                    </h4>
                                </div>
                            </div>
                             ): (
                                <div>No Prev Casse Available</div>
                             )}
    
    
                            <div className="portfolio-icon">
                                <img src="/images/portfolio/port-dot.png"/>
                            </div>
                            {nextItem ? (                      
    
                            <div className="portfolio-single">
                                <div className="portfolio-image">
                                    <Link href={`/portfolio/portfolio-details/${nextItem.slug.current}`}>
                                        <img src={urlFor(nextItem.image).url()}alt="portfolio-1"/>
                                    </Link>
                                </div>
                                <div className="portfolio-content">
                                    <span>Next Case</span>
                                    <h4 className="portfolio-title">
                                        <Link href={`/portfolio/portfolio-details/${nextItem.slug.current}`}>{nextItem.title}</Link>
                                    </h4>
                                </div>
                            </div>
                            
                            ): (
                                <div>No Next Case Availables</div>
                            )}
                        </div>
                    </div>
                    
                </div>
    
            </div>
            ))}
        </section>
    ):(
        <>
        <div className="flex items-center justify-center mt-[20px]">OOPS NO CONTENT YET</div>
        <Link href={"/portfolio"}  className="bg-transparent"><span className="flex  bg-[#339638] px-10 py-2 text-white uppercase">go back</span></Link>
        </>
    )}
    </>
  )
}

export default PortfolioDetailsContent
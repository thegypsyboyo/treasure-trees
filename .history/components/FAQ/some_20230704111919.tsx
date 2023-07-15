"use client"
import React, { useState } from 'react'
import { BiPlus, BiMinus } from "react-icons/bi"

const faq:QuestionAnswers[] = [
    {
        question: "What trees do you plant ?",
        answer: "We plant all kinds of trees especially those that are indegenous in nature or close to extinction",
    },
    {
        question: "What trees do you plant ?",
        answer: "We plant all kinds of trees especially those that are indegenous in nature or close to extinction",
    },
    {
        question: "What trees do you plant ?",
        answer: "We plant all kinds of trees especially those that are indegenous in nature or close to extinction",
    },
    {
        question: "What trees do you plant ?",
        answer: "We plant all kinds of trees especially those that are indegenous in nature or close to extinction",
    },

] 
const some = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [iconRotation, setIconRotation] = useState(0); // initialize the rotation angle to 0

    const toggleIconRotation = () => {
        // update the rotation angle based on the current value
        setIconRotation(prevRotation => prevRotation + 180);
      };


    const onAccordionClick = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const QnAData = faq.map((item) => ({
        question: item.question,
        answer: item.answer
    }))
    // Dynamically split the Q&A data into two separate arrays
    const halfLength = Math.ceil(QnAData?.length / 2);
    const firstHalf = QnAData?.slice(0, halfLength);
    const secondHalf = QnAData?.slice(halfLength);
    


  return (
    <div className="faq-area style-2">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-6">
                    <div className="faq-img">
                        <img src="/images/spratt.jpg" className="fa-img" alt="image" />
                        <div className="faq-thumb">
                            <img src="/images/logo.png" alt="thumb-image" />
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-6">
                    <div className="section-title">
                        <span className="section-subtitle">[ faq ]</span>
                        <h2 className="section-main-title mb-55">some questions</h2>
                    </div>
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
            </div>
        </div>
    </div>
  )
}

export default some
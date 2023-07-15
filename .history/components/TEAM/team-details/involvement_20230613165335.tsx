import "../../../styles/team.scss"


import React from 'react'

const involvementData:Involvement = {
    title: "WINNING AWS",
    description: "EVERY SINGLE OLIVE OIL HAS BEEN CAREFULLY CHOSEN BY OUR EXPERT",
    images: [
        "/images/portfolio/team-award2.png",
        "/images/portfolio/team-award1.png",
        "/images/portfolio/team-award3.png",
    ],
    mainImage: "/images/team/team-intro-img.jpg"
}

const Involvement = () => {
  return (
    <section className='team-intro-area'>
        <div className='container'>
            <div className="row">
                <div className="col-xl-7 col-lg-7">
                <div className='team-intor-content'>
                    <div className='section-title'>
                    <span className="section-subtitle">{involvementData.title}</span>
                    <h2 className="section-main-title mb-[45px]">{involvementData.description}
                    </h2>
                    </div>
                    <div className='team-award-logo'>
                        
                    <a href="#">
                        <img src={`${involvementData.images}`} alt="award" />
                    </a>
                    {/* <a href="">
                        <img src="/images/portfolio/team-award2.png" alt="award" />
                    </a>
                    <a href="">
                        <img src="/images/portfolio/team-award3.png" alt="award" />
                    </a> */}
                    </div>
                </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                <div className='team-intro-thumb'>
                    <img src={involvementData.mainImage} alt="team-intro"/>
                </div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Involvement
'use client'
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"


const contentData:HomeAbout = {
    image: [
        {
            id: 1,
            asset: "/images/donate/about-group-thumb1.jpg"
        },
        {
            id: 2,
            asset: "/images/donate/about-group-thumb2.jpg"
        },
        {
            id: 3,
            asset: "/images/donate/about-group-thumb3.jpg"
        },
        {
            id: 4,
            asset: "/images/donate/about-group-thumb4.jpg"
        },
        {
            id: 5,
            asset: "/images/donate/about-group-thumb5.jpg"
        },
        {
            id: 6,
            asset: "/images/donate/about-group-thumb6.jpg"
        },
        {
            id: 7,
            asset: "/images/donate/about-group-thumb7.jpg"
        },

    ],
    description: "Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.",
    skillTitle: [
        {
            title: "LANDSCAPING GROUND",
            percentage: "55%"
        },
        {
            title: "CARBON HYDRATION",
            percentage: "90%"
        },

    ],
    sinceFrom: "since from 2007",
    title: "TREASURE TREES' AIM TO REGENERATION"

}


const Foundation = () => {
  return (
    <>
    <div className="about-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                        <div className="about-thumb-group" >
                            {contentData.image?.map((item, index) => (
                            <img className={`img-thumb-${item.id}`} src={item.asset} alt="img" key={index}/>
                            ))}
                        </div>
                </div>
                <div className="col-lg-4">
                    <div className="about-content">
                        <div className="section-title">
                            <span className="section-subtitle">[ {contentData.sinceFrom} ]</span>
                            <h2 className="section-main-title" >{contentData.title}</h2>
                            <p className="">{contentData.description}</p>
                            <div className="about-work-progress">
                                <div className="bd-skill--content">
                                     {contentData.skillTitle?.flatMap((skill, index) => (
                                        <div className="bd-skill__wrapper" key={index}>
                                            <div className="bd-skill-title__wrapper">
                                                <h5 className="bd-skill--title">{skill.title}</h5>
                                                <span>{skill.percentage}</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{width:skill.percentage}}>
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="btn">
                                <Link href="/about" className="border-btn-rounded">
                                    learn more
                                    <BsArrowRight/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Foundation
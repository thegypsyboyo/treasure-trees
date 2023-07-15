import { faEnvelopeOpen, faMapMarkedAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

type Props = {
    post: TeamMember
}
const page = ({post}:Props) => {
    const teamData: TeamDetails[] = [
        {
            name: "Michael Bay",
            image: "/images/banner-1.jpg",
            phone: "+123-4561-5523",
            bio: "Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally. The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples",
            email: "info@michaelbay.com",
            location: "Watamu Kenya",
            skills: [
                {
                    title: "Farming",
                    percentage: "90%"
                },
                {
                    title: "Microgenetics",
                    percentage: "100%"
                },
                {
                    title: "Farming",
                    percentage: "90%"
                },
                {
                    title: "Microgenetics",
                    percentage: "100%"
                },
            ],
            socials:[
                {
                    platform: "facebook",
                    url: "https://facebook"
                },
                {
                    platform: "linkedin",
                    url: "https://linkedin"
                }
            ],
            specialization:"Management"
        }
    ]
    console.log(post, "TEAM MEMBERS SLUG")
  return (
    <div className='team-details-area'>
        <div className="container">
            {teamData.map((item, index) => (
            <div className="team-details-wrapper" key={index}>
                <div className="row">
                    <div className="col-xl-5">
                        <div className="member-img">
                            <img src={item.image} alt="member-image" />
                            <div className="member-contact">
                                <ul>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i>
                                                    <FontAwesomeIcon icon={faPhone}/>
                                                </i>
                                            </div>
                                            <p>
                                                Tel: 
                                                <a href={`tell:${item.phone}`}>{item.phone}</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i>
                                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                                </i>
                                            </div>
                                            <p>
                                                Email: 
                                                <a href={`mailto:${item.email}`}>{item.email}</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i>
                                                    <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                                </i>
                                            </div>
                                            <p>Add: <a href="#">{item.location}</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="team-details-content">
                            <span className="member-designation">{item.specialization}</span>
                            <h4 className="member-name">{item.name}</h4>
                            <p className="mb-[20px]">{item.bio}</p>
                            <div className="hr-1"></div>
                            <div className="team-details-social">
                                <h4 className="section-widget-title">follow me on</h4>
                                <div className="social-links">
                                <ul>
                                    {item.socials.map((social, index) => (       
                                    <li key={index}>
                                    <a href={social.url} rel="noreferrer noopener" target="_blank">
                                        {social.platform === "facebook" && <FaFacebookF/>}
                                        {social.platform === "instagram" && <FaInstagram/>}
                                        {social.platform === "linkedin" && <FaLinkedinIn/>}
                                        {social.platform === "twitter" && <FaTwitter/>}
                                        {social.platform === "twitch" && <FaTwitch/>}
                                        {social.platform === "youtube" && <FaYoutube/>}
                                    </a>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                            <div className="hr-1"></div>
                            <div className="team-details-skills mt-[35px]">
                                    <h4 className="section-widget-title">skillset</h4>
                                    <p className="mb-[20px]">The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples.</p>
                                    <div className="bd-skill--content">
                                        {item.skills.map((skill, index) => (
                                        <div className="bd-skill__wrapper mb-[35px]"  key={index}>
                                            <div className="bd-skill--title__wrapper">
                                                <h5 className="bd-skill--title">{skill.title}</h5>
                                                <span>{skill.percentage}</span>
                                            
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{width:skill.percentage}}>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                          ))}
                                        {/* <div className="bd-skill__wrapper mb-[35px]">
                                            <div className="bd-skill--title__wrapper">
                                                <h5 className="bd-skill--title">soil making</h5>
                                                <span>90%</span>
                                            
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-skill__wrapper mb-[35px]">
                                            <div className="bd-skill--title__wrapper">
                                                <h5 className="bd-skill--title">soil making</h5>
                                                <span>90%</span>
                                            
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                  

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default page
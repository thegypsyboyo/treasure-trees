import urlFor from '@/lib/urlFor'
import { faEnvelopeOpen, faMapMarkedAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

type Props = {
    post: TeamMember
}
const page = ({post}:Props) => {
   
  return (
    <div className='team-details-area'>
        {post.teamDetails ? (
        <div className="container">
            {post.teamDetails.map((item, index) => (
            <div className="team-details-wrapper" key={index}>
                <div className="row">
                    <div className="col-xl-5">
                        <div className="member-img">
                            {post.image && (
                                <img src={urlFor(post.image).url()} alt="member-image" />
                            )}
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
                            <span className="member-designation">{post.position}</span>
                            <h4 className="member-name">{post.name}</h4>
                            <span className="member-designation mb-4 underline">My Bio</span>
                            <p className="mb-[20px]">{item.bio}</p>
                            <div className="hr-1"></div>
                            <div className="team-details-social">
                                <h4 className="section-widget-title">follow me on</h4>
                                <div className="social-links">
                                    {post.socials ? (
                                        <ul>
                                            {post.socials?.map((social, index) => (       
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
                                    ): (
                                        <div className='flex items-center justify-center'>No Socials</div>
                                    )}
                                </div>
                            </div>
                            <div className="hr-1"></div>
                            <div className="team-details-skills mt-[35px]">
                                    <h4 className="section-widget-title">skillset</h4>
                                    <p className="mb-[20px]">{item.skillSetInfo}</p>
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
                                    </div>
                                  

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            ))}
        </div>
        ): (
            <>
            <div className='flex items-center justify-center'>No content availabe for THE TEAM MEMBER</div>
            <Link href="/team" className='flex items-center justify-center bg-indigo-600 w-fit p-2 m-auto'>Go back</Link>
            </>
        )}
    </div>
  )
}

export default page
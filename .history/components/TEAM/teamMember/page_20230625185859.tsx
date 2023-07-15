import { faEnvelopeOpen, faMapMarkedAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'


const page = () => {
  return (
    <div className='team-details-area'>
        <div className="container">
            <div className="team-details-wrapper">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="member-img">
                            <img src="/images/banner-1.jpg" alt="member-image" />
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
                                                <a href="tel:+123-4561-5523">+123-4561-5523</a>
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
                                                <a href="mailto:example@email.com">example@email.com</a>
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
                                            <p>Add: <a href="#">Flat 20, Reynolds Neck</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="team-details-content">
                            <span className="member-designation">Horticulturist</span>
                            <h4 className="member-name">double a. action</h4>
                            <p className="mb-[20px]">Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.</p>
                            <p className="mb-35">The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples, Gothic ruins, bridges, and other picturesque architecture, designed to recreate an idyllic pastoral landscape. Gardens are also thought of as an image of the soul and innocence.</p>
                            <div className="hr-1"></div>
                            <div className="team-details-socials">
                                <h4 className="section-widget-title">follow me on</h4>
                                <div className="social-links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i> <FaFacebookF/></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i> <FaTwitter/></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i> <FaYoutube/></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hr-1"></div>
                                <div className="team-details-skills">
                                    <h4 className="section-widget-title">skillset</h4>
                                    <p className="mb-20">The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples.</p>
                                    <div className="bd-skill-content">
                                        <div className="bd-skill-title__wrapper">
                                            <h5 className="bd-skill--title">soil making</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

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

export default page
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {
    faEnvelopeOpen,
    faMapMarkedAlt,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
  

const pattern = "/images/pattern.png"

const Footer = () => {
  return (

    // <div className="footer-bg">
    //     <div className="footer-area footer-area1 footer-area1-bg pt-[95px] pb-[55px]">
    //         <div className="footer-bg-shape">
    //             <Image src={`${pattern}`} width={600} height={600} alt="pattern"/>
    //         </div>
    //         <div className="container-footer">
    //             <div className="row">
    //                 <div className="col-lg-3 col-md-6 col-sm-6">
    //                     <div className="footer-widget footer1-widget footer1-widget1">
    //                         <div className="footer-widget-title">
    //                             <h4 className="h4">about us</h4>
    //                         </div>
    //                         <p className="about-footer-info mb-[35px]">
    //                         Is that lawn is an open space between woods or lawn can be uncountable a type of thin linen or cotton while garden is an outdoor area containing one or more types of plants
    //                         </p>
    //                         <div className="footer-supporter">
    //                             <div className="irc-item support-meta">
    //                                 <div className="irc-item-icon">
    //                                     <i className="fas fa-phone-alt">
    //                                         <FontAwesomeIcon icon={faPhone}/>
    //                                     </i>
    //                                 </div>
    //                                 <div className="irc-item-content">
    //                                     <p>emergency call</p>
    //                                     <div className="support-number">
    //                                     <a href="tel:98965963168">989 659 631 68</a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="col-lg-3 col-md-6 col-sm-6">
    //                      <div className="footer-widget footer1-widget footer1-widget1">
    //                      <div className="footer-widget-title">
    //                     <h4 className="h4">main pages</h4>
    //                     <div className="container-flex-row">
    //                         <ul>
    //                             <li><a href="/">Home</a></li>
    //                             <li><a href="/about">about</a></li>
    //                             <li><a href="/services">services</a></li>
    //                             <li><a href="/blog">news</a></li>
    //                             <li><a href="/team">Team</a></li>
    //                         </ul>
    //                     <ul>
    //                         <li><a href="/contact">refund policy</a></li>
    //                         <li><a href="/contact">Get in touch</a></li>
    //                         <li><a href="/contact">Emergency</a></li>
    //                         <li><a href="/contact">get a quote</a></li>
    //                     </ul>
    //                 </div>

    //                     </div>
    //                 </div>
    //                 </div>


    //                  <div className="col-lg-3 col-md-6 col-sm-6">
    //                 <div className="footer-widget footer1-widget footer1-widget1">
    //                 <div className="footer-widget-title">
    //                     <h4 className="h4">services</h4>
    //                     <ul>
    //                         <li><a href="/contact">LAWN MOVING</a></li>
    //                         <li><a href="/contact">HEDGE CUTTING</a></li>
    //                         <li><a href="/contact">FLOWER PLANTING</a></li>
    //                         <li><a href="/contact">GARDEN REMODELING</a></li>
    //                         <li><a href="/contact">GARDEN RESTORATION</a></li>
    //                     </ul>
    //                 </div>
    //                 </div>
    //                 </div>
                 
    //                 <div className="col-lg-3 col-md-6 col-sm-6">
    //                 <div className="footer-widget footer1-widget footer1-widget1">
    //                 <div className="footer-widget-title">
    //                     <h4 className="h4">get in touch</h4>
    //                     <div className="footer-contact">
    //                         <ul>
    //                             <li>
    //                                 <div className="single-contact">
    //                                     <div className="contact-icon"><FontAwesomeIcon icon={faPhone}/></div>
    //                                     <p>
    //                                     <a href="tel:1-800-700-600">1-800-700-600</a>
    //                                     </p>
    //                                 </div>
    //                             </li>
    //                             <li>
    //                                 <div className="single-contact">
    //                                     <div className="contact-icon"><FontAwesomeIcon icon={faEnvelopeOpen}/></div>
    //                                     <p>
    //                                     <a href="treasuretreeskenya.com">treasuretreeskenya.com</a>
    //                                     </p>
    //                                 </div>
    //                             </li>
    //                             <li>
    //                                 <div className="single-contact">
    //                                     <div className="contact-icon"><FontAwesomeIcon icon={faEnvelopeOpen}/></div>
    //                                     <p>
    //                                     <a href="treasuretreeskenya.com">treasuretreeskenya.com</a>
    //                                     </p>
    //                                 </div>
    //                             </li>
    //                             <li>
    //                                 <div className="single-contact">
    //                                     <div className="contact-icon"><FontAwesomeIcon icon={faEnvelopeOpen}/></div>
    //                                     <p>
    //                                     <a href="treasuretreeskenya.com">treasuretreeskenya.com</a>
    //                                     </p>
    //                                 </div>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <div className="footer-socials"></div>
    //                 </div>
    //                 </div>
    //                 </div>  
                 
    //             </div>
    //         </div>
    //         <div className="footer-container">

    //         </div>
    //     </div>

    //     <div className="copyright1-area">
    //         <p className="copyright1-text">
    //             Some content
    //         </p>

    //     </div>
    // </div>
    <div className="footer1-bg">
        <section className="footer-area-bg1">
            <div className="footer-bg-shape">
                <img src="/images/pattern.png" alt="bg-shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-widget footer1-widget">
                            <div className="footer-widget-title">
                                <h4>about us</h4>
                            </div>
                            <p className="mb-35">
                                Is that lawn is an open space between woods or lawn can be uncountable a type of thin linen or cotton while garden is an outdoor area containing one or more types of plants
                            </p>
                            <div className="footer-support">
                                <div className="support-meta">
                                    <div className="irc-item-icon">
                                        <i className="fa-phone-alt">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </i>
                                    </div>
                                    <div className="irc-item-content">
                                        <p>Emergency Call</p>
                                        <div className="support-number">
                                            <a href="tel:98965963168">989 659 631 68</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget footer1-widget footer1-widget2">
                            <div className="footer-widget-title">
                                    <h4>main pages</h4>
                            </div>
                            <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Our work</a></li>
                                    <li><a href="/">Donate</a></li>
                                    <li><a href="/">Get in Touch</a></li>
                            </ul>
                            <ul>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget footer1-widget footer1-widget3">
                            <div className="footer-widget-title">
                                <h4>main pages</h4>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Our work</a></li>
                                <li><a href="/">Donate</a></li>
                                <li><a href="/">Get in Touch</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer1-widget footer-widget footer1-widget4">
                            <div className="footer-widget-title">
                                <h4>main pages</h4>
                            </div>
                           <div className="footer-contact">
                                <ul>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fa-phone-alt">
                                                    <FontAwesomeIcon icon={faPhone}/>
                                                </i>
                                            </div>
                                            <p>
                                                <a href="tel:1-800-700-600">1-800-700-600</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fa-phone-alt">
                                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                                </i>
                                            </div>
                                            <p>
                                                <a href="mailto:info@bdevs-email.com">info@bdevs-email.com</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fa-phone-alt">
                                                    <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                                </i>
                                            </div>
                                            <p>
                                                <a href="#">MALINDI, KENIA</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                           </div>
                           <div className="footer-social">
                                <span>Connect:</span>
                                <div className="social-links">
                                    <ul>
                                        <li> 
                                        <a href="#">
                                            <i class="fab fa-twitter">
                                                <FaTwitter/>
                                            </i>
                                        </a>
                                        </li>
                                        <li> 
                                        <a href="#">
                                            <i class="fab fa-twitter">
                                                <BsInstagram/>
                                            </i>
                                        </a>
                                        </li>
                                        <li> 
                                        <a href="#">
                                            <i class="fab fa-twitter">
                                                <FaFacebookF/>
                                            </i>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>


  )
}

export default Footer
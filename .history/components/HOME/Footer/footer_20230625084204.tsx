"use client"

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {
    faEnvelopeOpen,
    faLongArrowUp,
    faMapMarkedAlt,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
  

const pattern = "/images/pattern.png"

const Footer = () => {
    const [navSocials, setNavSocials] = useState<NavbarSocials[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavSocials = async () => {
      try {
        const query = groq`*[_type == "navbar"] {
          ...,
          socials[]->{
            platform,
            url
          }
        }`;
        const response = await client.fetch(query);
        setNavSocials(response);
        setLoading(false);
      } catch (error) {
        console.error("Error Loading Items: ", error);
        setLoading(false);
      }
    };

    fetchNavSocials();
  }, []);
  return (
    <div className="footer1-bg">
        {navSocials? (
        <section className="footer-area-bg1">
            <div className="footer-bg-shape">
                <img src="/images/pattern.png" alt="bg-shape"/>
            </div>
            {navSocials?.map((item, index) => (
            <div className="container" key={index}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-widget footer1-widget">
                            <div className="footer-widget-title">
                                <h4>about us</h4>
                            </div>
                            <p className="mb-35">
                                {item.aboutWebsite}
                            </p>
                            <div className="footer-support">
                                <div className="support-meta">
                                    <div className="irc-item-icon">
                                        <i className="fa-phone-alt">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </i>
                                    </div>
                                    <div className="irc-item-content">
                                        <p>Our Contact</p>
                                        <div className="support-number">
                                            <a href={`tel:${item.emergencyContact}`}>{item.emergencyContact}</a>
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
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About us</Link></li>
                                    <li><Link href="/services">Our work</Link></li>
                                    <li><Link href="/donate">Donate</Link></li>
                                    <li><Link href="/contact">Get in Touch</Link></li>
                            </ul>
                            <ul>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/porfolio">Meet the Trees</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget footer1-widget footer1-widget3">
                            <div className="footer-widget-title">
                                <h4>our work</h4>
                            </div>
                            <ul>
                                <li><Link href="/porfolio">meet the trees</Link></li>
                                <li><Link href="/about">About us</Link></li>
                                <li><Link href="/">Our work</Link></li>
                                <li><Link href="/donate">Donate</Link></li>
                                <li><Link href="/contact">Get in Touch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer1-widget footer-widget footer1-widget4">
                            <div className="footer-widget-title">
                                <h4>contact us</h4>
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
                                            <a href={`tel:${item.emergencyContact}`}>{item.emergencyContact}</a>
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
                                            <a href={`mailto:${item.emailAddress}`}>{item.emailAddress}</a>
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
                                                <a href="#">{item.locationAddress}</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                           </div>
                           <div className="footer-social">
                                <span>Connect:</span>
                                <div className="social-links">
                                    <ul>
                                    {item.socials.map((item, index) =>(
                                        <li key={index}>
                                            <a href={item.url} rel="noreferrer noopener" target="_blank">
                                            {item.platform === "facebook" && <FaFacebookF/>}
                                            {item.platform === "instagram" && <FaInstagram/>}
                                            {item.platform === "linkedin" && <FaLinkedinIn/>}
                                            {item.platform === "twitter" && <FaTwitter/>}
                                            {item.platform === "twitch" && <FaTwitch/>}
                                            {item.platform === "youtube" && <FaYoutube/>} 
                                            </a>
                                        </li>

                                        ))}
                                    </ul>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
        ): (
            <div className="flex justify-center items-center">Loading ...</div>
        )}

        <div className="copyright-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-logo">
                                <Link href="/logo.jpg"><img src="" alt="logo"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="copyright-text">
                                Copyright &amp; Design By 
                                <a href="#"> @treasuretreesteam</a> 
                                - 2023
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="go-top-btn">
                                <a href="#" className="go-top">
                                    <i className=""></i>
                                    <i className="fal fa-long-arrow-up">
                                        <FontAwesomeIcon icon={faLongArrowUp}/>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>


  )
}

export default Footer
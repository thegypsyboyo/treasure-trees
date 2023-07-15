import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsInstagram } from 'react-icons/bs'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitch } from 'react-icons/fa';

import "../../../styles/team.scss"



const Team = () => {

  const team: TeamMember[] = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: "/images/team/team-1.jpg",
      socials: [
        {
          platform: 'twitter',
          url: 'https://twitter.com/johndoe'
        },
        {
          platform: 'instagram',
          url: 'https://instagram.com/johndoe'
        },
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/johndoe/'
        }
      ]
    },
    {
      name: 'John Doe',
      position: 'CEO',
      image: "/images/team/team-2.jpg",
      socials: [
        {
          platform: 'twitter',
          url: 'https://twitter.com/johndoe'
        },
        {
          platform: 'instagram',
          url: 'https://instagram.com/johndoe'
        },
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/johndoe/'
        }
      ]
    },
    {
      name: 'John Doe',
      position: 'CEO',
      image: "/images/team/team-3.jpg",
      socials: [
        {
          platform: 'twitter',
          url: 'https://twitter.com/johndoe'
        },
        {
          platform: 'instagram',
          url: 'https://instagram.com/johndoe'
        },
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/johndoe/'
        }
      ]
    },

  ]
  return (
    <React.Fragment>
      <div className="team-area">
          <div className="container">
            <div className="team-wrapper hover-img-border">
              <div className="row">

                {team.map((item, index) => (

          
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                  <div className="team-single">
                    <div className='team-member-wrapper'>
                      <div className='member-img'>
                        <Link href="#">
                          <img src={item.image} alt='member'/>
                        </Link>
                      </div>
                      <div className='member-content'>
                        <span className="member-designation">{item.position}</span>
                        <h4 className="member-name">
                          <Link href="/team-details/1">{item.name}</Link>
                        </h4>
                        <div className='social-links-team'>
                          <ul>
                            {item.socials.map((social, index) => (       
                            <li key={index}>
                              <a href={social.url} rel="noreferrer noopener" target="_blank">
                                {/* <FaFacebookF/> */}
                                {social.platform === "facebook" && <FaFacebookF/>}
                                {social.platform === "instagram" && <FaInstagram/>}
                                {social.platform === "linkedin" && <FaLinkedinIn/>}
                                {social.platform === "twitter" && <FaTwitter/>}
                                {social.platform === "twitch" && <FaTwitch/>}
                                {social.platform === "youtube" && <FaYoutube/>}
                                
                                
                              </a>
                            </li>
                            ))}


                            {/* <li>
                              <a href="">
                                <BsInstagram/>
                              </a>
                            </li> */}
                          </ul>
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

      <section className='blog-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='section-title'>
                <span className="section-subtitle">insights</span>
                <h2 className="section-main-title  mb-[45px]">blog &amp; insights</h2>
              </div>
            </div>
          </div>
          <div className='blog-wrapper'>
            <div className='row'>
              <div className='col-xl-4'>
                <div className='blog-single'>
                  <div className='blog-thumb'>
                    <a href=''>
                      <img src="/images/blog/blog-1.jpg" alt="blog-img" />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta-list'>
                      <div className='blog-meta-single'>
                        <div className='blog-meta-text'>
                          <div className="blog-date">August 23, 2022</div>
                        </div>
                      </div>
                      <div className='blog-meta-single'>
                        <div className="blog-meta-text">
                          by
                          <span>Andrew</span>
                        </div>
                      </div>
                    </div>
                    <h2 className='blog-title'>
                      <a href="/blog-details/8">Most gardens consist of a mix of natural</a>
                    </h2>
                    <p className="blog-text">Most gardens consist of a mix of natural &amp; constructed elements, although even very natural gardens are always.</p>
                    <div className='blog-btn'>
                      <a href="" className='text-btn'>
                        <BsArrowRight/>
                        read more
                        <BsArrowRight/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8'>
                <div className='blog-single'>
                  <div className='blog-thumb'>
                    <a href=''>
                      <img src="/images/blog/blog-1.jpg" alt="blog-img" />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta-list'>
                      <div className='blog-meta-single'>
                        <div className='blog-meta-text'>
                          <div className="blog-date">August 23, 2022</div>
                        </div>
                      </div>
                      <div className='blog-meta-single'>
                        <div className="blog-meta-text">
                          by
                          <span>Andrew</span>
                        </div>
                      </div>
                    </div>
                    <h2 className='blog-title'>
                      <a href="/blog-details/8">Most gardens consist of a mix of natural</a>
                    </h2>
                    <p className="blog-text">Most gardens consist of a mix of natural &amp; constructed elements, although even very natural gardens are always.</p>
                    <div className='blog-btn'>
                      <a href="" className='text-btn'>
                        <BsArrowRight/>
                        read more
                        <BsArrowRight/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Team
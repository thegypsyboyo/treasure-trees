import { BsArrowRight } from "react-icons/bs"
import "../../../styles/team.scss"


import React from 'react'

const BlogIsights = () => {

  const blogData: BlogTeam[] = [
    {
      title: "MOST GARDENS CONSIST OF A MIX OF NATURAL",
      author: "Meta",
      date: "AUGUST 23, 2022",
      description: "Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.",
      image: "/images/blog/blog-1.jpg",
      slug: "",
      id: 1,
    },
    {
      title: "MOST GARDENS CONSIST OF A MIX OF NATURAL",
      author: "Meta",
      date: "AUGUST 23, 2022",
      description: "Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.",
      image: "/images/blog/blog-1.jpg",
      slug: "",
      id: 2,
    }
  ]
  return (
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
            {blogData.map((item, index) => (
            <div className='row' key={index}>
              <div className='col-xl-4'>
                <div className='blog-single'>
                  <div className='blog-thumb'>
                    <a href={item.slug}>
                      <img src={item.image}alt="blog-img" />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta-list'>
                      <div className='blog-meta-single'>
                        <div className='blog-meta-text'>
                          <div className="blog-date">{item.date}</div>
                        </div>
                      </div>
                      <div className='blog-meta-single'>
                        <div className="blog-meta-text">
                          by
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className='blog-title'>
                      <a href="/blog-details/8">{item.title}</a>
                    </h2>
                    <p className="blog-text">{item.description}.</p>
                    <div className='blog-btn'>
                      <a href={item.slug} className='text-btn'>
                        <BsArrowRight/>
                        read more
                        <BsArrowRight/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8' >
                <div className='blog-single'>
                  <div className='blog-thumb'>
                    <a href=''>
                      <img src={item.image} alt="blog-img" />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta-list'>
                      <div className='blog-meta-single'>
                        <div className='blog-meta-text'>
                          <div className="blog-date">{item.date}</div>
                        </div>
                      </div>
                      <div className='blog-meta-single'>
                        <div className="blog-meta-text">
                          by
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className='blog-title'>
                      <a href="/blog-details/8">{item.description}</a>
                    </h2>
                    <p className="blog-text">{item.description}.</p>
                    <div className='blog-btn'>
                      <a href={item.slug} className='text-btn'>
                        <BsArrowRight/>
                        read more
                        <BsArrowRight/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BlogIsights
import "../../../styles/team.scss"


import React from 'react'

const BlogIsights = () => {
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
  )
}

export default BlogIsights
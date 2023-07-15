'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
// import "../../../../../styles/single-blog.scss"
import "../../../styles/single-blog.scss"
import { FaCalendar, FaCommentDots, FaEye, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, InstapaperShareButton} from 'react-share';

import urlFor from "../../../lib/urlFor"
// import { PortableText } from "@portabletext/react";
// import { RichTextComponent } from "../../../components/SANITY/richTextComponent";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiKeyboardLine } from 'react-icons/ri';
import { groq } from 'next-sanity';

import {client} from "../../../lib/sanity.client"
import { BsFillCalendarMonthFill } from 'react-icons/bs'


type Props = {
    post: Post;
}
const quote_icon = "/images/blog/quote-icon-white-small.png" 
const thumb_one = "/images/blog/blog-1.jpg"



const blogdata = [

  {
      view: "10K",
      comment: "300K",

  },
]

const query = groq`
  *[_type == 'post'] | order(date desc) {
    slug,
    title
  }
`;
const BlogDetailsContent = ({post}: Props) => {
  // const [views, setViews] = useState(post.views || 0);
  const [prevPost, setPrevPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   const fetchViews = async () => {
  //     const res = await fetch(`/api/views/${post.slug.current}`);
  //     const data = await res.json();
  //     setViews(data.views);
  //   };
  //   fetchViews();
  // }, [post.slug.current]);
 

  useEffect(() => {
    // const client = client;

    const slug = post?.slug?.current;
    if (!slug) return;

    const query = groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url,
      publishedAt
    }`;

    const params = { slug };
    client.fetch(query, params).then((data: any) => {
      const currentIndex = data.findIndex((p: any) => p.slug.current === slug);
      setPrevPost(data[currentIndex + 1] || null);
      setNextPost(data[currentIndex - 1] || null);
    });
  }, [post]);


  /// RELATED POSTS
  useEffect(() => {
    // const client = getClient();

    if (!post) return;

    const query = groq`
      *[_type == "post" && _id != $postId && (postTags[]->title in $postTags || title match $title)] | order(_createdAt desc) {
        _id,
        title,
        slug,
        description,
        "mainImage": mainImage,
        "_createdAt": _createdAt,
        "authorNames": authors[]->name
      }
    `;

    const params = {
      postId: post._id,
      postTags: post.postTags.map((tag) => tag.title),
      title: `.*${post.title}.*`,
    };

    client.fetch(query, params).then((data:any) => {
      setRelatedPosts(data);
    });
  }, [post]);

  
  


  console.log("POST DETAILS",post)
  // console.log("views", views)
  console.log("Information On Related Post",query)
  return (
    <section className="blog-area">        
        <div className="container">
          <div className="row">
            {post.singlePostInformations && post.singlePostInformations.map((single, index) => (

            
            <div className="col-xl-9 col-lg-8 col-md-12" key={index}>
              <div className="blog-details-wrapper mb-[60px]">
                <div className="blog-single-details">


                {blogdata.map((item, index) => (

                <div className="blog-list-item" key={index} >
                    {item?.view && (

                    <div className="blog-meta-single">
                        <div className="blog-meta-icon">
                            <FaEye/>
                        </div>
                        <div className="blog-meta-text">{0} views</div>
                    </div>
                    )}

                    {item.comment && (

                    <div className="blog-meta-single">
                        <div className="blog-meta-icon">
                            <FaCommentDots/>
                        </div>
                        <div className="blog-meta-text">{item.comment}</div>
                    </div>
                    )}

                        <div className="blog-meta-single">
                        <div className="blog-meta-icon">
                            <BsFillCalendarMonthFill/>
                        </div>
                        <div className="blog-meta-text">
                        {new Date(post._createdAt).toLocaleDateString(
                          "en-Us", {
                             day: "numeric",
                             month: "long",
                             year: "numeric",
                          }
                        )}                          
                          
                        </div>
                    </div>
                </div> 
                ))}
                {single.blogDescriptionOne && (
                  <p className="">
                        {single.blogDescriptionOne}
                  </p>
                  )}
                  {single.image && (
                    <div className="blog-thumb">
                    <Image 
                      src={urlFor(single.image).url()} 
                      fill loading="lazy" alt="blog-img"
                    />
                  </div> 
                    )}
                  <h3>
                    {single.blogTitle}
                  </h3>
                  <p className="pb-50">
                    {single.blogDescriptionOne}
                  </p> 

                  <div className="hr-1"></div> 

                  <h3>{single.blogSubInfoTitle}</h3>


                  <div className="img-details">
                    <img src={urlFor(single.blogSubImageInfo).url()} alt="img-details" />

                    <p>{single.blogSubInfoDescription}</p>
                  </div>

                  <div className="blockquote-d-wrapper mb-[50px]">
                    <div className="blockquote-d-content">
                      <div className="blockquote-d-icon">
                        <img src={quote_icon}  alt="quote-icon"/>
                      </div>

                        <p className="block-desc">
                          {single.quoteInfo}

                        </p>

                        <h4 className="author-name">{single.quoteFounderName}</h4>
                        <span className="author-designation">Founder</span>
                    </div>
                  </div>

                  <p className="mb-[45px]">
                         {single.postDescriptionEnding}
                  </p>

                  <div className="blog-actions mb-[60px]">
                    <div>
                            <h4>Releted Tags</h4>
                            <div className="blog-tag-list">
                                {post.postTags.map((item, index) => (
                                    <a className="tag" href="/blog" key={index}>{item.title}</a>
                                ))}
                              
                            </div>
                    </div>
                    {/* <div>
                            <h4>Social Share</h4>
                            <div className="social-links blog-share">
                              <ul>
                                <li>
                                  <FacebookShareButton url={`/blog/blog-post/${post.slug.current}`}>
                                    <a>
                                      <i><FaFacebookF/></i>
                                    </a>
                                  </FacebookShareButton>
                                </li>
                                <li>
                                  <a href="" rel="noopener noreferrer" target="_blank">
                                    <i><FaTwitter/></i>
                                  </a>
                                </li>
                                <li>
                                  <InstapaperShareButton url="https://www.instagram.com/myadventurers/?fbclid=IwAR0ElRKCOEs91SYlWXboy0NGcMNuX4seGZJtGSMX_HsRiDIwAO44qVAUEyY">
                                    <a href="https://www.instagram.com/myadventurers/?fbclid=IwAR0ElRKCOEs91SYlWXboy0NGcMNuX4seGZJtGSMX_HsRiDIwAO44qVAUEyY" rel="noopener noreferrer" target="_blank">
                                      <i><FaInstagram/></i>
                                    </a>
                                  </InstapaperShareButton>
                                </li>
                                <li>
                                  <a href="" rel="noopener noreferrer" target="_blank">
                                    <i><FaLinkedinIn/></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                    </div> */}
                  </div>

                  <div className="blog-nav-wrapper mb-[60px]">
                          <div className="blog-nav-items">
                            {prevPost ? (
                           
                            <div className="blog-single">
                              {prevPost.mainImage && (
                                <div className="blog-img">
                                  <Link href={`/blog/blog-post/${prevPost.slug.current}`}>
                                    <img src={urlFor(prevPost.mainImage).url()}  alt="img-details"/>
                                  </Link>
                                </div>
                              )}
                              <div className="blog-content">
                                <span>Prev Post</span>
                                <h4 className="blog-title">
                                  <Link href={`/blog/blog-post/${prevPost.slug.current}`}>{prevPost.title.slice(0, 10)} ...</Link>
                                </h4>
                              </div>
                            </div>
                             ): (
                              <div className="blog-single">
                                <div className="blog-content">
                                  <span>No previous posts available</span>
                                </div>
                              </div>
                             )}
                            <div className="dot-icon">
                              <RiKeyboardLine/>
                            </div>
                            {nextPost ? (                           
                            <div className="blog-single">
                              <div className="blog-img">
                                <Link href={`/blog/blog-post/${nextPost.slug.current}`} className="">
                                  <img src={urlFor(nextPost.mainImage).url()}  alt="img-details"/>
                                </Link>
                              </div>
                              <div className="blog-content">
                                <span>Next Post</span>
                                <h4 className="blog-title">
                                  <a href="">tips on minimalist</a>
                                </h4>
                              </div>
                            </div>
                              ): (
                                <div className="blog-single">
                                  <div className="blog-content">
                                    <span>No next post available</span>
                                  </div>
                                </div>
                              )}
                
                          </div>
                  </div>

                  {/* <div className="blog-nav-wrapper mb-[60px]">
                    <div className="blog-nav-items">
                      <div className="blog-single">
                        {prevPost && (
                          <>
                          <div className="blog-img">
                          <a href={`//blog/blog-post/${prevPost.slug.current}`} className="">
                            <img src={urlFor(prevPost.mainImage).url()} alt={prevPost.title} className="img-details" />
                          </a>
                          </div>
                          <div className="blog-content">
                            <span>Prev Post</span>
                            <h4 className="blog-title">
                              <a href={`/blog/blog-post/${prevPost.slug.current}`}>{prevPost.title}</a>
                             </h4>
                           </div>
                        </>
                        )}
                      </div>
                      <div className="dot-icon">
                        <RiKeyboardLine />
                      </div>
                      <div className="blog-single">
                        {nextPost && (
                          <>
                          <div className="blog-img">
                            <a href={`/posts/${nextPost.slug.current}`} className="">
                              <img src={urlFor(nextPost.mainImage).url()} alt={nextPost.title} />
                            </a>
                          </div>
                          <div className="blog-content">
                            <span>Next Post</span>
                            <h4 className="blog-title">
                              <a href={`/posts/${nextPost.slug.current}`}>{nextPost.title}</a>
                            </h4>
                          </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div> */}
                  

                  {post.authors.map((author, index) => (
                  <div className='blog-writter' key={index}>
                    <div className='blog-writter-img'>
                      <Image 
                          src={urlFor(author.image).url()}
                          alt="author"
                          width={200}
                          height={200}
                       />
                    </div>
                    <div className='blog-writter-content'>
                      <span>Written by</span>
                      <h4 className="writer-name">{author.name}</h4>
                      <p>{author.description}</p>
                    </div>
                  </div>
                  ))}
                </div>
                <div>
                  {/* <PortableText value={post.body}  components={RichTextComponent}/> */}
                </div>
              </div>
            </div>

            ))}
            <div className="col-xl-3 col-lg-4 col-md-8">
                    <div className="blog-sidebar-wrapper">
                        <div className="sidebar-widget sidebar-about">
                            <h4 className="sidebar-widget-title">
                                about me
                            </h4>
                            {post.authors.map((item, index) =>(

                            <div className="sidebar-about-content" key={index}>
                                {item.image && (
                                    <div className="about-thumb">
                                <img src={urlFor(item.image).url()} alt={item.slug}/>
                                </div>
                                )}
                                <h4 className="member-name">{item.name}</h4>
                                <p>{item.description}</p>
                                <div className="social-links">
                                  {item.socials.map((social, index) => (
                                  
                                    <ul className='' key={index}>
                                        {social && social.platform == 'facebook' && (

                                          <li>
                                          <a href={social.url} rel="noreferrer noopener" target="_blank">
                                              <FaFacebookF />
                                          </a>
                                          </li>
                                        )}
                                        {social && social.platform === 'twitter' && (
                                          <li>
                                          <a href={social.url} rel="noreferrer noopener" target="_blank">
                                              <FaTwitter />
                                          </a>
                                          </li>
                                      )}
                
                                      {social && social.platform === 'youtube' && (
                                        <li>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            <FaYoutube />
                                        </a>
                                        </li>
                                      )}
                                      {social && social.platform === 'instagram' && (
                                        <li>
                                          <a href={social.url} rel="noreferrer noopener" target="_blank">
                                              <FaInstagram />
                                          </a>
                                        </li>
                                      )}
                                      {social && social.platform === 'linkedin' && (
                                        <li>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            <FaLinkedinIn />
                                        </a>
                                        </li>
                                      )}
                                    </ul>

                                    ))}
                                </div>
                            </div>
                            ))}

                        </div>
                        <div className="sidebar-widget sidebar-search">
                            <h4 className="sidebar-widget-title">
                                search here
                            </h4>
                            <div className="sidebar-search-form">
                            <input type="text" placeholder="Search your keyword..."/>
                            <button className=""><i><FaSearch/></i></button>
                            </div>
                        </div>
                        <div className="sidebar-widget sidebar-blog">
                            <h4 className="sidebar-widget-title">Similar Post Feed</h4>
                            <div className="sidebar-bloglist">
                                <ul>
                                    {relatedPosts.map((item, index) =>(

                                    <li key={index}>
                                        <div className="single-bloglist">
                                          {item.mainImage && (
                                         
                                            <div className="blog-thumb">
                                                <img src={urlFor(item.mainImage).url()} alt="thumb"/>
                                            </div>
                                             )}
                                            <div className="blog-content">
                                                <h4 className="blog-title">
                                                <a href={`/blog/blog-post/${item.slug.current}`}>{item.title.slice(0,40)} ...</a>
                                                </h4>
                                                <div className="blog-meta-list">
                                                    <div className="blog-meta-list-single">
                                                        <div className="blog-meta-icon">
                                                            <i><BsFillCalendarMonthFill/></i>
                                                        </div>
                                                        <div  className="blog-meta-text"> {new Date(item._createdAt).toLocaleDateString("en-Us", {
                                                          day: "numeric",
                                                          month: "long",
                                                          year: "numeric",
                                                          })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget sidebar-categories">
                            <h4 className="sidebar-widget-title">categories</h4>
                            <div className="sidebar-category-list">

                                <ul>
                                {post.categories && post.categories.map((item, index) =>(
                                    <li key={index}>
                                        <div className="">
                                            <a href="">
                                                {item && (
                                       
                                                
                                                <>
                                              <span className="category-name">{item.title}</span>
                                              
                                                <div className="svg-icon">
                                                    <MdKeyboardArrowRight/>
                                                </div>
                                                <div className="category-number">{item.number}</div>
                                                </>
                                               )}

                                            </a>
                                        </div>
                                    </li>
                                        ))}
                                        </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget sidebar-tags">
                            <h4 className="sidebar-widget-title">tags</h4>
                            <div className="sidebar-tag-lists">
                                {post.tags.map((item, index)=>(

                                    <a className="tag" href="/blog" key={index}>{item.title}</a>
                                ))}

                            </div>

                        </div>
                        <div className="sidebar-widget sidebar-adv">
                            <h4 className="sidebar-widget-title">sponsored adds</h4>
                            <img src={thumb_one} alt="thumb"/>
                        </div>
                    </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default BlogDetailsContent
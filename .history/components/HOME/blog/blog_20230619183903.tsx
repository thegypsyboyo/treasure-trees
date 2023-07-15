"use client"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import {HiOutlineArrowNarrowRight } from  "react-icons/hi"

import { useState, useEffect } from "react"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
const blog_1 = "/images/blog/blog-11.jpg"
const blog_2 = "/images/blog/blog-12.jpg"
const blog_3 = "/images/blog/blog-13.jpg"

const data = [
    {
        date: "AUGUST 23, 2022",
        name: "jack",
        description: "MOST GARDENS CONSIST OF A MIX OF NATURAL",
        img: blog_1,
        item_id: "1"
    },
    {
        date: "AUGUST 23, 2022",
        name: "Potter",
        description: "YOU'LL SEE IT REGULARLY OF SIGHT, OUT OF MIND",
        img: blog_2,
        item_id: "2"

    },
    {
        date: "AUGUST 23, 2022",
        name: "Jane",
        description: "PLACE YOUR GARDEN IN A PART OF YOUR YARD",
        img: blog_3,
        item_id: "3"

    },
]
type  Props = {
    posts: Post[];
}

const Blog = ({posts}:Props) => {
    const [blogData, setBlogData] = useState<Post[] | null>(null)
    const query = groq`*[_type=='post']{
        ...,
        "tags": tags[]-> {
          title,
          slug,
        },
        "authors": authors[]->{
          name, 
          image,
          "socials": socials[]->{
              platform,
              url
          }
        },
        "postTags": postTags[]->{title,slug },
        "categories": categories[]->{
            _id,
            title,
            number,
          }
      
    } | order(_createdAt desc)`;
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(query);
            console.log("THE BLOG: ", data)
            setBlogData(data);
        }
        fetchData();
    }, [])

    const firstThreePosts = blogData?.slice(0, 2);
   
  return (
    <div className="blog-areas">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <span className="section-subtitle">news insights</span>
                        <h2 className="section-main-title mb-45">blog &amp; insights</h2>
                    </div>
                </div>
            </div>
            <div className="blog-wrapper">
                {firstThreePosts? (
                <div className="row-blog">
                    {firstThreePosts.map((item,index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="blog-single">
                            <div className="blog-thumb">
                                <img src={urlFor(item.mainImage).url()} alt="image-thumb" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta-list">
                                    <div className="blog-meta-single">
                                        <div className="blog-meta-text">
                                            <div className="blog-date">{item._createdAt}</div>
                                        </div>
                                    </div>
                                    <div className="blog-meta-single">
                                        <div className="blog-meta-text">
                                            by
                                            {item.authors?.map((author, index) => (
                                                <span key={index}>{author.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-title">
                                    <a href={item.slug}>
                                        {item.title}
                                    </a>
                                </div>
                                <Link className='text-btn' href={item.slug}>
                                    <BsArrowRight/>
                                    read more
                                    <BsArrowRight/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                ): (
                    <div>Loading</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Blog
"use client"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import {HiOutlineArrowNarrowRight } from  "react-icons/hi"

import { useState, useEffect } from "react"
import { client } from "@/lib/sanity.client"
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
    const [blogData, setBlogData] = useState<Post | null>(null)
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
            setBlogData(data);
        }
        fetchData();
    }, [])

    console.log(blogData)
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
                <div className="row-blog">
                    {data.map((item,index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="blog-single">
                            <div className="blog-thumb">
                                <img src={item.img} alt="image-thumb" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta-list">
                                    <div className="blog-meta-single">
                                        <div className="blog-meta-text">
                                            <div className="blog-date">{item.date}</div>
                                        </div>
                                    </div>
                                    <div className="blog-meta-single">
                                        <div className="blog-meta-text">
                                            by
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-title">
                                    <a href="#">Most gardens are a mix of natural &amp; constructed
                                    </a>
                                </div>
                                <Link className='text-btn' href="#">
                                    <BsArrowRight/>
                                    read more
                                    <BsArrowRight/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
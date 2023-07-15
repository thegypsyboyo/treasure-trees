"use client"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import {HiOutlineArrowNarrowRight } from  "react-icons/hi"

import { useState, useEffect } from "react"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"


const Blog = () => {
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

    const firstThreePosts = blogData?.slice(0, 3);
   
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
                    {firstThreePosts?.map((item,index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="blog-single">
                            <div className="blog-thumb">
                                {item.mainImage? (
                                    <img src={urlFor(item.mainImage).url()} alt="image-thumb" />
                                ): (null)}
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta-lkfqefhpqefpikqdpkhqfist">
                                    <div className="blog-meta-single">
                                        <div className="blog-meta-text">
                                            <div className="blog-date">{new Date(item._createdAt).toLocaleDateString(
                                                "fr-Us", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )}</div>
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
                                <Link href={`/blog/blog-post/${item.slug.current}`}>{item.title}</Link>
                                </div>
                                <Link className='text-btn' href={`/blog/blog-post/${item.slug.current}`}>
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
                    <div className="flex justify-center">Loading ...</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Blog
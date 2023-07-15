"use client"

import Image from "next/image"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import {MdKeyboardArrowRight} from "react-icons/md"
import { FaCalendar,FaCommentDots,FaEye, FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"
const thumb_one = "/images/blog/blog-1.jpg"
const profile = "/images/blog/team-9.jpg"

import urlFor from "../../../lib/urlFor";

import "../../../styles/blog.scss"


const tags = [
    "popular", "blog", "DEsign", "UX", "usability", "keyboard", "mouse", "business", "consultancy", "kit", "drive", "environment"
]
const blogdata = [

    {
        // tags: "",
        view: "10K",
        comment: "300K",

    },
]

// const popularfeeds = [
//     { 
//         image_url: portfolio1,
//         title: "Having education in an area helps",
//         date: "August 23, 2022",
//     },
//     { 
//         image_url: portfolio2,
//         title: "That contributes to their success",
//         date: "August 23, 2022",
//     },
//     { 
//         image_url: portfolio3,
//         title: "People think, feel, & behave in a way",
//         date: "August 23, 2022",
//     },
// ]

// const categories = [
//     {
//         cat_name: "Business",
//         cat_num: "26",
//     },
//     {
//         cat_name: "Design",
//         cat_num: "06",
//     },
//     {
//         cat_name: "Rebranding",
//         cat_num: "10",
//     },
// ]

type  Props = {
    posts: Post[];
}

const BlogList = ({posts }: Props) => {

    const [author] = posts.map((post) => post.authors)
    console.log(author.map((item) => item.socials))
    const [tag ] = posts.map((post) => post.tags)
    console.log(tag)
    const postTag = posts.map((post) => post.postTags)
    console.log("POST TAGS",postTag)
    const [category ] = posts.map((post) => post.categories && post.categories)
    // console.log(category.map((cat) => cat.title))
    // console.log(category.map((cat) => cat.number))
  
    const [similarPosts, setSimilarPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);


    useEffect(() => {
      if (posts.length > 1) {
        const allTags = posts.flatMap((post) => post.postTags.map((tag) => tag.title));
        const commonTags = allTags.filter((tag, index) => allTags.indexOf(tag) === index && allTags.lastIndexOf(tag) !== index);
  
        const similar = posts.filter((post) => post.postTags.some((tag) => commonTags.includes(tag.title))).slice(0, 5);
        setSimilarPosts(similar);
      } else {
        setSimilarPosts([]);
      }
    }, [posts]);
  
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        const results = posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
    setFilteredPosts(results);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        // Generate suggestions
        const suggestions = posts
          .map((post) => post.title)
        //   .filter((title) =>
        //     title.toLowerCase().includes(e.target.value.toLowerCase())
        //   );
        .flatMap((title) => title.split(" ").slice(0, 3).join(" "))
        .filter((title) =>
            title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        
        setSearchSuggestions(suggestions);

         // Clear suggestions when search term is empty
        if (value === '') {
            setSearchSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        const results = posts.filter((post) =>
          post.title.toLowerCase().includes(suggestion.toLowerCase())
        );
        setFilteredPosts(results);
    };

    console.log('POSTS TESTING TO SEE IF IT WORKS : ', posts)

  return (
    <section className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-12">
                    {posts.map((post) =>(
                       
                    <div className="blog-main-wrapper" key={post.slug}>
                        <div className="blog-single">
                            {post.mainImage && (
                            <div className="blog-thumb">
                                <Link href={`/blog/blog-post/${post.slug.current}`}>
                                     
                                    <Image src={urlFor(post.mainImage).url()} fill loading="lazy" alt={post.slug}/> 
                                </Link>
                            </div>
                            )}
                            {post.postTags && (
                            <div className="blog-content">
                                <div className="tags">
                                {post.postTags.map((tag, index) => tag &&(
                                    <React.Fragment  key={tag.slug}>
                                    <Link href={`/blog/blog-post/${post.slug.current}`}>    
                                    {tag.title} 

                                    </Link>
                                    {index < post.postTags.length - 1 && ", "}
                                    </React.Fragment>

                                  ))}
                                  
                                        
                                    </div>

                                {post.authors && post.authors.filter(author => author.name && author.image).map((author) => (

                                <div className="blog-author" key={author.slug}>
  
                                    <div className="author-img ">
                                        <img src={urlFor(author.image).url()} alt={post.slug}/>
                                    </div>
                                    <h4 className="author-name">
                                        <span> by</span>
                                        <a href="" className=""> {author?.name} </a>
                                    </h4>
                                </div>
                                ))}


                                <h2 className="blog-title">
                                    <Link href={`/blog/blog-post/${post.slug.current}`}>{post.title}</Link>
                                </h2>
                                <p className="blog-description">{post.description}</p>

                                <div className="hr-1"></div>

                                 {blogdata.map((item, index) =>(

                                <div className="blog-list-item" key={index}>
                                    {item?.view && (

                                    <div className="blog-meta-single">
                                        <div className="blog-meta-icon">
                                            <FaEye/>
                                        </div>
                                        <div className="blog-meta-text">{item.view}</div>
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
                                            <FaCalendar/>
                                        </div>
                                            <div className="blog-meta-text">{new Date(post._createdAt).toLocaleDateString(
                                                "fr-Us", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )}
                                            </div>
                                    </div>
                                </div> 
                                 ))}


                            </div>
                            )}

                        </div>

                    </div>

                    ))}


                </div>

                <div className="col-xl-3 col-lg-4 col-md-8">
                    <div className="blog-sidebar-wrapper" >
                        <div className="sidebar-widget sidebar-about">
                            <h4 className="sidebar-widget-title">
                                about me
                            </h4>
                            { author.map((info) => (
                            <div className="sidebar-about-content" key={info.slug}>
                                <div className="about-thumb relative">
                                <img src={urlFor(info.image).url()} alt={info.slug}/>
                                </div>
                                <h4 className="member-name">{info.name}</h4>
                                <p>{info.description}</p>

                                {info.socials && info.socials.map((social, index) => (
                                <div className="social-links" key={index}>
                                <ul>
                                    {social && social.platform === 'twitter' && (
                                        <li>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            <FaTwitter />
                                        </a>
                                        </li>
                                    )}
                                    {social && social.platform === 'twitch' && (
                                        <li>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            <FaTwitch />
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
                                    {social && social.platform === 'facebook' && (
                                        <li>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            <FaFacebookF />
                                        </a>
                                        </li>
                                    )}
                                </ul>                                
                              </div>
                                ))}

                            </div>
                           ))}

                            

                        </div>
                        <div className="sidebar-widget sidebar-search">
                            <h4 className="sidebar-widget-title">search here</h4>
                            <form onSubmit={handleSearch}>
                            <div className="sidebar-search-form">
                                <input
                                type="text"
                                placeholder="Search your keyword..."
                                value={searchTerm}
                                onChange={handleInputChange}
                                />
                                {searchSuggestions.length > 0 && (
                                <ul>
                                    {searchSuggestions.map((suggestion) => (
                                    <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </li>
                                    ))}
                                </ul>
                                )}
                                <button type="submit" className="">
                                <i>
                                    <FaSearch />
                                </i>
                                </button>
                            </div>
                            </form>
                        </div>                        
                
                        <div className="sidebar-widget sidebar-blog">
                            <h4 className="sidebar-widget-title">Search Post Feeds</h4>
                            <div className="sidebar-bloglist">
                            {/* <ul>
                                {searchTerm === "" ? (
                                <li>No search results found</li>
                                ) : (
                                filteredPosts.map((post, index) => (
                                    <li key={index}>
                                    <div className="single-bloglist">
                                        {post.mainImage && (
                                        <div className="blog-thumb">
                                            <img
                                            src={
                                                post.mainImage ? urlFor(post.mainImage).url() : ""
                                            }
                                            alt={post.title}
                                            />
                                        </div>
                                        )}

                                        <div className="blog-content">
                                        <h4 className="blog-title">
                                            <a href={`/post/${post.slug}`}>
                                            {post.title.slice(0, 50)} ...
                                            </a>
                                        </h4>
                                        <div className="blog-meta-list">
                                            <div className="blog-meta-list-single">
                                            <div className="blog-meta-icon">
                                                <i>
                                                <FaCalendar />
                                                </i>
                                            </div>
                                            <div className="blog-meta-text">
                                                {new Date(post._createdAt).toLocaleDateString(
                                                "en-Us",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                                )}
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                ))
                                )}
                            </ul> */}
                            <ul>
                            {searchTerm === "" ? (
                                <li>SEARCH FOR POSTS</li>
                            ) : filteredPosts.length > 0 ? (
                                filteredPosts.map((post, index) => (
                                <li key={index}>
                                    <div className="single-bloglist">
                                    {post.mainImage && (
                                        <div className="blog-thumb">
                                        <img
                                            src={
                                            post.mainImage ? urlFor(post.mainImage).url() : ""
                                            }
                                            alt={post.title}
                                        />
                                        </div>
                                    )}
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                        <a href={`/post/${post.slug}`}>
                                            {post.title.slice(0, 50)} ...
                                        </a>
                                        </h4>
                                        <div className="blog-meta-list">
                                        <div className="blog-meta-list-single">
                                            <div className="blog-meta-icon">
                                            <i>
                                                <FaCalendar />
                                            </i>
                                            </div>
                                            <div className="blog-meta-text">
                                            {new Date(post._createdAt).toLocaleDateString(
                                                "en-Us",
                                                {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                }
                                            )}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                ))
                            ) : (
                                    
                                        <li>NO RESULTS FOUND FOR POST
                                        </li>
                                    
                            )}
                            </ul>
                            </div>
                        </div>

                        {similarPosts.length > 0 && (
                        <div className="sidebar-widget sidebar-blog">
                            <h4 className="sidebar-widget-title">what people also search for</h4>
                            <div className="sidebar-bloglist">
                                <ul>
                                {similarPosts.map((post) => (
                                    <li key={post._id}>
                                    <div className="single-bloglist">
                                        {post.mainImage && (
                                        <div className="blog-thumb">
                                            <img src={post.mainImage ? urlFor(post.mainImage).url() : ""} alt={post.title} />
                                        </div>
                                        )}

                                        <div className="blog-content">
                                        <h4 className="blog-title">
                                            <a href={`/post/${post.slug}`}>{post.title.slice(0, 20)} ...</a>
                                        </h4>
                                        <div className="blog-meta-list">
                                            <div className="blog-meta-list-single">
                                            <div className="blog-meta-icon">
                                                <i>
                                                <FaCalendar />
                                                </i>
                                            </div>
                                            <div className="blog-meta-text">
                                                {new Date(post._createdAt).toLocaleDateString("en-Us", {
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
                        )}
                        
                        <div className="sidebar-widget sidebar-categories" >
                            <h4 className="sidebar-widget-title">categories</h4>
                            <div className="sidebar-category-list">

                                    <ul>
                                    {category ? category.map((item) => ( 
                                        <li key={item._id}>
                                            <div className="">
                                                <a href="">
                                                    <span className="category-name">{item.title}</span>
                                                    <div className="svg-icon">
                                                        <MdKeyboardArrowRight/>
                                                    </div>
                                                    <div className="category-number">{item.number}</div>
                                                </a>
                                            </div>
                                        </li>
                                    )): null}
                                    </ul>
                            </div>
                        </div>

                        <div className="sidebar-widget sidebar-tags">
                            <h4 className="sidebar-widget-title"> tags</h4>
                            <div className="sidebar-tag-lists">

                                {tag.map((tag) =>(
                                <a className="tag" href="/blog" key={tag._id}>{tag.title}</a>
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

export default BlogList
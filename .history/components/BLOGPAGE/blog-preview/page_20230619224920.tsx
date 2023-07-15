// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import {client} from "../../../lib/sanity.client"

import PreviewSuspense from "../../SANITY/previewSupspense"

import PreviewBLogList from '../blog-list/preview-bloglist'
import BlogList from "../../BLOGPAGE/blog-list/blog-list"

import "../../../styles/blog.scss"
import Blog from "@/components/HOME/blog/blog"
import Page from "@/app/(user)/about/page"

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


export default async function BlogPage() {
  if(draftMode()) {
    return(
      <>
      <PreviewSuspense fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#f7ab0a">Loading preview data ...</p>
        </div>
      }>
        <PreviewBLogList query={query}/>

        <p>preview mode!</p>
      </PreviewSuspense>
    
    <h1 className="text-center text-yellow-500 animate-pulse">This data is in preview!</h1>

      </>

    )
  }
  const posts = await client.fetch(query)



  return (
    <>
    <BlogList  posts={posts}/>
    </>
  )
  
}


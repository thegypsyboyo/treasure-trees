// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import {client} from "../../../lib/sanity.client"
import type { SanityDocument } from "@sanity/client";

import PreviewSuspense from "../../SANITY/previewSupspense"

import PreviewBLogList from '../blog-list/preview-bloglist'
import BlogList from "../../BLOGPAGE/blog-list/blog-list"

import "../../../styles/blog.scss"
import Blog from "@/components/HOME/blog/blog"
import Page from "@/app/(user)/about/page"

export const query = groq`*[_type=='post']{
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

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
//   _id, title, slug
// }`;

// export const getStaticProps = async () => {
//   const data:Post[] = await client.fetch(query);

//   return { props: { data } };
// };

// export default function BlogPage({ data }: { data: any}) {
//   return <BlogList posts={data} />
// }


export default async function BlogPage() {

  const posts = await client.fetch(query)
  return (
    <>
    <BlogList  posts={posts}/>
    </>
  )
  
}



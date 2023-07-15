// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import {client} from "../../../lib/sanity.client"
import type { SanityDocument } from "@sanity/client";
import { GetStaticProps } from "next";
import PreviewSuspense from "../../SANITY/previewSupspense"

import PreviewBLogList from '../blog-list/preview-bloglist'
import BlogList from "../../BLOGPAGE/blog-list/blog-list"

import "../../../styles/blog.scss"
import Blog from "@/components/HOME/blog/blog"
import Page from "@/app/(user)/about/page"
import dynamic from "next/dynamic";
import { getClient } from "@/lib/getClient";
import PreviewPosts from "./previewPosts";
// import PreviewProvider from "@/components/SANITY/PreviewProvider";


const PreviewProvider = dynamic(
  () => import("@/components/SANITY/PreviewProvider")
);
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


export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  if (preview && !previewToken) {
    throw new Error(`Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`);
  }
  const client = getClient(previewToken);

  const data = await client.fetch(query);

  return { props: { data, preview, previewToken } };
};



export default function BlogPage({
  data,
  preview,
  previewToken,
}: {
  data: Post[];
  preview: boolean;
  previewToken?: string;
}) {
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <PreviewPosts posts={data} />
        <div className="prose prose-blue p-8">
          <a href="/api/exit-preview">
            Exit preview
          </a>
        </div>
      </PreviewProvider>
    );
  }
  // const posts = await client.fetch(query)
  return (
    <BlogList  posts={data}/>
  )
  
}



import React from 'react'
import BlogList from '../../../components/BLOGPAGE/blog-list/blog-list'

import BlogHeader from "../../../components/BLOGPAGE/blogheader/header"
import PreviewBlog from "../../../components/BLOGPAGE/blog-preview/page"

import "../../../styles/about.scss"
import "../../../styles/globals.css"

const Blog = () => {
  return (
    <>
      <BlogHeader/>
      {/* <BlogList/> */}
      <PreviewBlog />

    </>
  )
}

export default Blog
import Image from "next/image"
import Link from 'next/link'
import urlFor from "../../lib/urlFor"

import '../../styles/richtext.scss'

export const RichTextComponent = {
  types: {
    image: ({value}:any) => {
      return (
        <div className="blog-thumb">
          <Image 
          src={urlFor(value).url()}
          alt="Blog post"
          fill
          loading="lazy"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({children}: any) => (
      <ul>{children}</ul>
    ),
    number:({children}: any) => (
      <ol>{children}</ol>
    ),

  },
  block: {
    normal: ({children}: any) =>(
      <p className="text-normal-rich">{children}</p>
    ),
    h1: ({children}: any) => (

      <h1>{children}</h1>
    ),
    h2: ({children}: any) => (

      <h2>{children}</h2>
    ),
    h3: ({children}: any) => (

      <h3 className="text-bold-rich">{children}</h3>
    ),
    h4: ({children}: any) => (

      <h4>:{children}</h4>
    ),
    blockQuote:({children}: any) => (
      <blockquote className="blockquote-d-wrapper">{children}</blockquote>
    ),
    
  },
  marks: {
    links: ({children, value}: any) => {
      const rel = !value.href.startsWith('/')
      ? "noreferrer noopener"
      : undefined;

      return ( 
        <Link href={value.href} rel={rel} className="">{children}</Link>
      )
    }
  }
}



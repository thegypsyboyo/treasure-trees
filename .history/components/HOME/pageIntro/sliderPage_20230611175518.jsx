// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"


const query = groq`*[_type=='navbar']{
  ...,
  "tags": tags[]-> {
    title,
    slug,
  },
} | order(_createdAt desc)`;


export default async function SliderPage() {
    if(!query) {
        return(
            <div>Loading ...</div>
        )
    }
  const posts = await client.fetch(query)
  console.log("Checking content: ", posts)
  return (
    <div>Test</div>
  
  )
  
}


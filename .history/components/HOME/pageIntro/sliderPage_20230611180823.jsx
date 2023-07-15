// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import { client } from "@/lib/sanity.client"


const query = groq`*[_type == "navbar"] {
    ...,
    socials[]->{
        platform,
        url
    }
}`

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


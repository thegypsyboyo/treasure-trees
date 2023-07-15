// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"


const query = groq`*[_type == "navbar"] {
    ...,
    socials[]->{
        platform,
        url
    }
}`


export default async function SliderPage() {
    const posts = await client.fetch(query)
    if(!query) {
        return(
            <div>Loading ...</div>
        )
    }

  console.log("Checking content: ", posts)
  return (
    <div>Test</div>
  
  )
  
}


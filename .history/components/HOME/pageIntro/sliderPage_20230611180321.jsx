// import {previewData} from 'next/headers'
import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import { client } from "@/lib/sanity.client";

try {
    const query = groq`*[_type == "navbar"] {
        ...,
        socials[]->{
            platform,
            url
        }
    }`
    const response = await client.fetch(query);
    setNavSocials(response);
    setLoading(false);
    // console.log("NAVBAR SOCIALS: ", response)
} catch (error) {
    console.error("Error Loading Items: ", error);
    setLoading(false);
}

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


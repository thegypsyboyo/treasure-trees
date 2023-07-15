// "use client"
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState } from "react";


const query = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
    platform,
    url
  }
}`;



export default async function SliderPage() {
    // const [data, setData] = useState<NavbarSocials[] | null>(null)
    const posts:NavbarSocials[] = await client.fetch(query);
    if(!posts) {
        return(
            <div>Loading ...</div>
        )
    }
    return(
        <div>{posts?.map((item) => item.aboutWebsite)}</div>
    )
}

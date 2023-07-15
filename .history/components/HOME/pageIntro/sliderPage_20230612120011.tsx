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



export default function SliderPage() {
    const [data, setData] = useState<NavbarSocials[] | null>(null)
  try {
    const fetchPosts = async () => {
      const posts = await client.fetch(query);
    //   console.log("Checking content: ", posts.map((item) => item.closingDays));
      setData(posts)
    };

    fetchPosts();

  } catch (error) {
    console.log("Error fetching data:", error);

    if(!data) {
        return(
            <div>Loading ...</div>
        )
    }
    return (
        <div></div>
    );
  }
}

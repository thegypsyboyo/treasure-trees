import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
    platform,
    url
  }
}`;



export default function SliderPage() {
  try {
    const fetchPosts = async () => {
      const posts:NavbarSocials[] = await client.fetch(query);
      console.log("Checking content: ", posts.map((item) => item.closingDays));
    };

    fetchPosts();

    return <div>Test</div>;
  } catch (error) {
    console.log("Error fetching data:", error);


    return (
        <div>Error occurred while fetching data.</div>
    );
  }
}

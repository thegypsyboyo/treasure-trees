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
  const fetchData = async () => {
    try {
      const posts = await client.fetch(query);
      console.log("Checking content: ", posts);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  fetchData();

  return <div>Test</div>;
}

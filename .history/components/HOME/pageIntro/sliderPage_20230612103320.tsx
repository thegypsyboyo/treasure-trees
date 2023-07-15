import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
    platform,
    url
  }
}`;

export function SliderPage() {
    const fetchData = async () => {
        try {
            const data = await client.fetch(query);
            console.log("TESTING THE DATA : ", data)
        } catch (error) {
            console.error("There was an error fetching the data: ",error)   
        }
    }

    fetchData();
   console.log("Checking content:");

  return <div>Test</div>;
}

export default SliderPage
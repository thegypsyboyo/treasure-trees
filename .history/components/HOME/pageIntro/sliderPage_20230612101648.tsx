import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
    platform,
    url
  }
}`;

export default function SliderPage({ posts }: { posts: any }) {
  console.log("Checking content:", posts);

  return <div>Test</div>;
}

export async function getServerSideProps() {
  try {
    const posts = await client.fetch(query);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);

    return {
      props: {
        posts: null,
      },
    };
  }
}

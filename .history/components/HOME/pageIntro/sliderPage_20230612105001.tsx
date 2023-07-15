import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import React, { useState, useEffect } from "react";

const query = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
    platform,
    url
  }
}`;

function SliderPage() {
  const [posts, setPosts] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await client.fetch(query);
        console.log("Checking content: ", fetchedPosts);
        setPosts(fetchedPosts);
        setIsDataLoaded(true);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDataLoaded(true);
    }, 5000); // Timeout duration in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>SliderPage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>{/* Render your post content here */}</li>
        ))}
      </ul>
    </div>
  );
}

export default SliderPage;

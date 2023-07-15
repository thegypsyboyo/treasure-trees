"use client"
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
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    const timeout = setTimeout(() => {
      setIsDataLoaded(true);
    }, 2000); // Timeout duration in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>SliderPage</h1>
      {isDataLoaded ? (
        <ul>
          {posts.map((post) => (
            <li key={post}>{posts}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SliderPage;

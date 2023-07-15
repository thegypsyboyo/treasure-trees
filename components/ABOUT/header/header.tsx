"use client"
import { useEffect, useState } from "react";
import DynamicContent from "../../../container/REUSABLES/dynamicContent"
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";

const Header = () => {
  const [sliderData, setSLiderData] = useState<HeaderPageProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "aboutusHeader"] {
          ...,
        } | order(_createdAt asc)`
        const response = await client.fetch(query);

        setSLiderData(response);
        setIsLoading(false);
        console.log("Fetched Data... ",response)

      } catch (error) {
        console.error("Error fetching data: ", error)
        setIsLoading(false);
      }

    }
    fetchSliderData();
  }, [])
  return (
    <>
          {sliderData ? (
          <div className="h-[100%]">
            {sliderData?.map((item, index) => (
            <div key={index}>
              <DynamicContent 
                   img_url={urlFor(item.image).url()}
                   title={item.title}
                   link_name="about us"
                   description={item.description}
              />
            </div>
            ))}
        </div>
          ): (
            <div className="flex items-center justify-center">Loading ...</div>
          )}
    </>
  )
}

export default Header
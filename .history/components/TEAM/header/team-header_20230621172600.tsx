"use client"

import { client } from "@/lib/sanity.client";
import DynamicContent from "../../../container/REUSABLES/dynamicContent"
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const TeamHeader = () => {
  const [sliderData, setSLiderData] = useState<DynamicContentProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "header"] {
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
         <div className="h-[100%]">

           <DynamicContent 
                img_url="/images/banner-2.jpg"
                title="EXPERT MANAGEMENT"
                link_name="team"
                description="PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION"
           />
        </div>
    </>
  )
}

export default TeamHeader
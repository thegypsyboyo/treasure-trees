import urlFor from "@/lib/urlFor";
import DynamicContent from "../../../container/REUSABLES/dynamicContent"
import { client } from "@/lib/sanity.client";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";

const ContactHeader = () => {
  const [sliderData, setSLiderData] = useState<HeaderPageProps[] | null>(null)
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
          {sliderData ? (
          <div className="h-[100%]">
            {sliderData?.map((item, index) => (
            <div key={index}>
              <DynamicContent 
                   img_url={urlFor(item.image).url()}
                   title={item.title}
                   link_name="team"
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

export default ContactHeader
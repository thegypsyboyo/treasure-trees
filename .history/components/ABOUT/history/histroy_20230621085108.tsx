"use client"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import Image from "next/image"
import {useState, useEffect} from "react" 




const Histroy = () => {
  const [sliderData, setSLiderData] = useState<AboutHistory[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "aboutHistory"] {
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
    <div className="history-area">
        <div className="container-history">
              {sliderData ? (
              <div className="history-chart">
                <div className=""></div>
                  {sliderData?.map((item, index) =>(
                <div className="single-year-wrapper first-year" key={index}>
                    <div className="single-year">
                      <div className="history-year">{item.year}</div>
                      <div className="history-thumb">
                        <Image src={urlFor(item?.image).url()} width={300} height={300} alt="histroy-image"/>
                      </div>
                      <div className="history-content-wrapper">
                        <div className="history-content">
                          <h1 className="history-title">{item?.title}</h1>
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    </div>
                    
                </div>
                ))}
            
          
              </div>
              ): (
                <div className="flex items-center justify-center">Loading ...</div>
              )}

        </div>
    </div>
  )
}

export default Histroy
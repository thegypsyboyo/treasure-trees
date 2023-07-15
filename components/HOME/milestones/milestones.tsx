'use client';
import { client } from "@/lib/sanity.client";
import StatItem from "../../../container/milestones/statItem";

import TrackVisibility from "react-on-screen";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const Milestones = () => {

  const [sliderData, setSLiderData] = useState<CountUp[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchSliderData = async () => {
      try {
        const query = groq`*[_type == "countUp"] {
         ...,
        }`
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
    <div className="fact-area fact-area-bg">
      <div className="container">
        <div className="row-fact">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="section-subtitle">fun fact</span>
              <h2 className="section-main-title">our progress over the years</h2>
            </div>
          </div>
        </div>
        <div className="fact-wrapper">
          {sliderData ? (
          <div className="row">
            {sliderData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="fact-single">
                <div className="fact-content">
                  <span className="fact-title">{item.title}</span>
                  <span className="fact-number">
                    <div>
                      {/* <span>2000</span> */}
                      <span>
                      <TrackVisibility once={false} key={item.id}>
                      {/* { <CountUp end={item.value} suffix={item.suffix}/>} */}
                      <StatItem stat={item} />
                    </TrackVisibility>
                      </span>
                      {/* <span>{ <CountUp end={item.value} suffix={item.suffix}/>}</span> */}
                      <span><span></span></span>
                    </div>
                  </span>
                  <div className="fact-icon">
                    <img src="images/donate/fact-icon.png" alt="icon" />
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
          ):(
            <div className="flex justify-center">Loading ...</div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Milestones
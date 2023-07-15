'use client';
import StatItem from "../../../container/milestones/statItem";

import TrackVisibility from "react-on-screen";



const data:CountUp[] = [
    {
        id: 1,
        value: 254,
        suffix: "",
        title: "Successful Projects",
        description: "Delivering solutions for your garden in very easily"
    },
    {
        id: 2,
        value: 2500,
        suffix: "+",
        title: "Successful Projects",
        description: "Delivering solutions for your garden in very easily"
    },
    {
        id: 3,
        value: 500,
        suffix: "M",
        title: "Successful Projects",
        description: "Delivering solutions for your garden in very easily"
    },
    // {
    //     id: 2,
    //     value: 3783,
    //     suffix: '',
    //     title: 'People Impacted',
    //   },
    //   {
    //     id: 3,
    //     value: 8,
    //     suffix: 'M',
    //     title: 'Money Donated',
    //   },
    //   {
    //     id: 4,
    //     value: 60,
    //     suffix: '+',
    //     title: 'Volunteer Involved',
    //   },
]

const Milestones = () => {
  return (
    <div className="fact-area fact-area-bg">
      <div className="container">
        <div className="row-fact">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="section-subtitle">fun fact</span>
              <h2 className="section-main-title">we keep stepping up</h2>
            </div>
          </div>
        </div>
        <div className="fact-wrapper">
          <div className="row">
            {data.map((item, index) => (
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
        </div>
      </div>
    </div>

  )
}

export default Milestones
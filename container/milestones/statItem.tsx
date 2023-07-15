'use client'


import CountUp from "react-countup"


type Props = {
  stat: CountUp;
}
const StatItem:React.FC<Props> = ({stat, isVisible}:any) => {
  return (
    <div className="miles-stat-container">
        <h3>{isVisible ? <CountUp end={stat.value} suffix={stat.suffix}/> : !isVisible}</h3>
        <p>{stat.title}</p>
    </div>
  )
}

export default StatItem
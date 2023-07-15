"use client"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import Image from "next/image"
import Link from "next/dist/client/link";

const team_1 = "/images/team/team-1.jpg";
const team_2 = "/images/team/team-2.jpg";
const team_3 = "/images/team/team-3.jpg";
const team_4 = "/images/team/team-4.jpg";

const data = [
    {
        img: team_1,
        title: "FOUNDER",
        name: "HUMBLE D. DOW",
        fburl: "/https://gardomia.vercel.app/home-4#",
        inst_url: "/https://gardomia.vercel.app/home-4#",
        twitter_url: "https://gardomia.vercel.app/home-4#" 
    },
    {
        img: team_2,        
        title: "DESIGNER",
        name: "JIKSON N. NELSON",
        fburl: "/https://gardomia.vercel.app/home-4#",
        inst_url: "/https://gardomia.vercel.app/home-4#",
        twitter_url: "https://gardomia.vercel.app/home-4#"
    },
    {
        img: team_3,
        title: "CEO",
        name: "ROSALINA D. WILLIAM",
        fburl: "/https://gardomia.vercel.app/home-4#",
        inst_url: "/https://gardomia.vercel.app/home-4#",
        twitter_url: "https://gardomia.vercel.app/home-4#"
    },
    {
        img: team_4,
        title: "DEVELOPER",
        name: "YOKOLILI Y. YANKE",
        fburl: "/https://gardomia.vercel.app/home-4#",
        inst_url: "/https://gardomia.vercel.app/home-4#",
        twitter_url: "https://gardomia.vercel.app/home-4#"
    },

]

const Team = () => {
  return (
    <div className="team-intro__container">
        <div className="team-intro">
            <h1>OUR FARMERS</h1>
            <h3>EXPERT FARMERS</h3>
        </div>

        <div className="team-container">
            {data?.map((item, index) =>(
                <div className="team-index" key={`${index}`}>
                    <div className="info-img">
                        <img src={`${item?.img}`} alt={`${item?.name}`}/>
                    </div>
                    <div className="team-info">
                        <h1>{item?.title}</h1>
                        <h3>{item?.name}</h3>
                    </div>
                    <div className="team-socials">
                        <Link href={`${item?.inst_url}`}><FaInstagram/></Link>
                  
                        <Link href={`${item?.twitter_url}`}><FaTwitter/></Link>
                  
                        <Link href={`${item?.fburl}`}><FaFacebookF/></Link>
                  
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Team
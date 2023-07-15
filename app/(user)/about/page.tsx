// 'use client'

// import Blog from "../../../components/HOME/blog/blog"
// import Header from "../../../components/ABOUT/header/header"
// import Intro from "../../../components/ABOUT/intro/intro"
// import Mission from "../../../components/ABOUT/mission/mission"
// import History from "../../../components/ABOUT/history/histroy"
// import AboutVideo from "../../../components/ABOUT/inroVideo/aboutVideo"
import "../../../styles/about.scss"
import "../../../styles/globals.css"
import dynamic from "next/dynamic"

const AboutVideo = dynamic(() => import("../../../components/ABOUT/inroVideo/aboutVideo"))
const History = dynamic(() => import("../../../components/ABOUT/history/histroy"))
const Mission = dynamic(() => import("../../../components/ABOUT/mission/mission"))
const Intro = dynamic(() => import("../../../components/ABOUT/intro/intro"))
const  Header = dynamic(() => import("../../../components/ABOUT/header/header"))
const Blog = dynamic(() => import("../../../components/HOME/blog/blog"))

export const metadata = {
  title: 'About us || Know more about treasure trees and what we strive for. Our mission to restore',
  description: ' Know more about treasure trees and what we strive for. Our mission to restore',
}

const Page = () => {
  
  return (
    <>
        <Header/>
        <Intro/>
        <Mission/>
        <AboutVideo/>
        <History/>
        <Blog/>
    </>
  )
}

export default Page
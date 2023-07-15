// "use client"
import "../../styles/about.scss"
import dynamic from "next/dynamic";

import PageIntro from "@/components/HOME/pageIntro/pageIntro";
import SliderPage from "@/components/HOME/pageIntro/sliderPage";
import { data } from "autoprefixer";
// const PageIntro = dynamic(() => import("../../components/HOME/pageIntro/pageIntro"))
const Foundation = dynamic(() => import("../../components/HOME/foundation/foundation"))
const Features = dynamic(() => import("../../components/HOME/features/features"))
const PhotoGallery = dynamic(() => import("../../components/HOME/photo-gallery/photo-gallery"))
const AboutVideo = dynamic(() => import("../../components/ABOUT/inroVideo/aboutVideo"))
const Process = dynamic(() => import("../../components/HOME/process/process"))
const ServiceInfo = dynamic(() => import("../../components/HOME/services/page"))
const Milestones = dynamic(() => import("../../components/HOME/milestones/milestones"))
const Blog = dynamic(() => import("../../components/HOME/blog/blog"),{ssr:false})

export const metadata = {
  title: 'Home | | Explore our home page and see what we are about',
  description: 'Treasure trees, the eco restoration drive ',
}
const page = () => {

  return (
    <>
        <PageIntro/>
        <SliderPage  />
        <Foundation/>
        <ServiceInfo/>
        <Process/>
        <AboutVideo/>
        <Features/>
        <Milestones/>
        <PhotoGallery/>
        {/* <Team/> */}
        {/* <NewsLetter/> */}
        <Blog/>
    </>
  )
}

export default page
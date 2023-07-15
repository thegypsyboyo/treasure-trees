import ServiceHeader from "../../../components/SERVICES/header/service-header"
import ServiceUs from "../../../components/SERVICES/service-us/service-us"
import ServicePreview from "../../../components/SERVICES/services-preview/page"


import "../../../styles/about.scss"
import "../../../styles/globals.css"
import "../../../styles/services.scss"
import Blog from "../../../components/HOME/blog/blog"


export const metadata = {
  title: 'Our work | | Explore treasure trees and see what our work is all about.',
  description: 'What treasure trees does and how it benefits everyone ',
}


const Page = () => {
  return (
    <>
        <ServiceHeader/>
        <ServicePreview/>
        <ServiceUs/>
        <Blog/>
    </>
  )
}

export default Page
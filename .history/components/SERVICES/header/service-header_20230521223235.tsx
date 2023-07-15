"use client"

import DynamicContent from "../../../container/REUSABLES/dynamicContent"

const ServiceHeader = () => {
  return (
    <>
         <div className="h-[100%]">

           <DynamicContent 
                img_url="/images/banner-2.jpg"
                title="our work"
                link_name="our work"
                description="PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION"
           />
        </div>
    </>
  )
}

export default ServiceHeader
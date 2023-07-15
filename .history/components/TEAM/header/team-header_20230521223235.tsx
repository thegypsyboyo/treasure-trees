// "use client"

import DynamicContent from "../../../container/REUSABLES/dynamicContent"

const TeamHeader = () => {
  return (
    <>
         <div className="h-[100%]">

           <DynamicContent 
                img_url="/images/banner-2.jpg"
                title="EXPERT MANAGEMENT"
                link_name="team"
                description="PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION"
           />
        </div>
    </>
  )
}

export default TeamHeader
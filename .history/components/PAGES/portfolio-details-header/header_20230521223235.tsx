import DynamicContent from "../../../container/REUSABLES/dynamicContent";

const PortfolioDetailsHeader = () => {
    // console.log("slug",service.slug)
   
    return (
    <>
         <div className="h-[100%]">

            <DynamicContent 
                title="Portfolio Details Content"
                // title="Some Content"
                img_url="/images/spratt.jpg"
                link_name="service details"
                description="portfolio details"
            />
        </div>
    </>
  )
}

export default PortfolioDetailsHeader;
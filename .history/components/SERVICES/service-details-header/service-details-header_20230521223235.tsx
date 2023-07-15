import DynamicContent from "../../../container/REUSABLES/dynamicContent"

type Props = {
    service: Service;
}
const ServiceDetailsHeader = ({service}: Props) => {
    // console.log("slug",service.slug)
   
    return (
    <>
         <div className="h-[100%]">

            <DynamicContent 
                title={service.title}
                // title="Some Content"
                img_url="/images/spratt.jpg"
                link_name="service details"
                description=""
            />
        </div>
    </>
  )
}

export default ServiceDetailsHeader
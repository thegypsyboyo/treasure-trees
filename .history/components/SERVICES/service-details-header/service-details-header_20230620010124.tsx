import urlFor from "@/lib/urlFor";
import DynamicContent from "../../../container/REUSABLES/dynamicContent"

type Props = {
    service: Service;
}
const ServiceDetailsHeader = ({service}: Props) => {
    // console.log("slug",service.slug)

    const blogtitle = service.slug.current.replace(/-/g, " ");
    const words = blogtitle.split(" ");
    const firstTenWords = words.slice(0, 3).join(" ");
    const desc = service.description.split(" ").slice(0, 10).join(" ")
    const mainImage = service.mainImage;
    const allData = service.servicesSlugInformation;
    const imageData = allData.map((item) => item.image);
    const img_url = urlFor(imageData).url();


    // console.log("Serive DEtailes Image", sImage);
    return (
    <>
         <div className="h-[100%]">

            <DynamicContent 
                title={firstTenWords}
                // title="Some Content"
                img_url={img_url}
                link_name="service details"
                description={desc}
            />
        </div>
    </>
  )
}

export default ServiceDetailsHeader
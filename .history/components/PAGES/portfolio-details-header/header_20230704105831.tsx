import urlFor from "@/lib/urlFor";
import DynamicContent from "../../../container/REUSABLES/dynamicContent";

type Props = {
    portfolio: PortfolioItem;
    allPortfolio: PortfolioItem[];
}

const PortfolioDetailsHeader = ({portfolio,allPortfolio}: Props) => {
    // console.log("slug",service.slug)
    return (
    <>
    {allPortfolio.map((item, index) => (
        <div className="h-[100%]" key={index}>

            <DynamicContent 
                title={item.title}
                img_url={urlFor(item.image).url()}
                link_name="service details"
                description={item.description}
            />
        </div>
    ))}
    </>
  )
}

export default PortfolioDetailsHeader;
import urlFor from "@/lib/urlFor";
import DynamicContent from "../../../container/REUSABLES/dynamicContent";

type Props = {
    portfolio: PortfolioItem;
}

const PortfolioDetailsHeader = ({portfolio}: Props) => {
    // console.log("slug",service.slug)
    return (
    <>
        <div className="h-[100%]">

            <DynamicContent 
                title={portfolio.title}
                img_url={urlFor(portfolio.image).url()}
                link_name="gallery details"
                description={portfolio.description}
            />
        </div>
    </>
  )
}

export default PortfolioDetailsHeader;
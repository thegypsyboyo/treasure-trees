import DynamicContent from "../../../container/REUSABLES/dynamicContent"

const lettuce = "/images/spratt.jpg"

type Props = {
  portfolio: PortfolioItem[];
}

const PortfolioHeader = ({portfolio}:Props) => {
  return (
    <>
         <div className="h-[100%]">
           <DynamicContent
                img_url="/images/spratt.jpg"
                title="Case Study"
                description="Studying the work through of treasure trees"
                link_name="portfolio"
           />
        </div>
    </>
  )
}

export default PortfolioHeader
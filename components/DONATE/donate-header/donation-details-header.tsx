import DynamicContent from "../../../container/REUSABLES/dynamicContent"

import urlFor from "../../../lib/urlFor"

type Props = {
  causesData: CausesItem;
}
const DonateDetailsHeader = ({causesData}: Props) => {
  // const info = causesData.map((item) => (item.title))
  return (
    <>
         <div className="h-[100%]">
            <DynamicContent 
              img_url={urlFor(causesData.image).url()}
              description="Striving for the impossible to save the planet"
              link_name="donation details"
              title={causesData.title}
            />

        </div>
    </>
  )
}

export default DonateDetailsHeader
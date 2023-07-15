import DynamicContent from "../../../container/REUSABLES/dynamicContent"

type Props = {
  causes: CausesItem[];
}
const DonateHeader = ({causes}: Props) => {
  return (
    <>
         <div className="h-[100%]">
            <DynamicContent 
              img_url="/images/banner-1.jpg"
              description="Donatate to save the planet"
              link_name="donate"
              title="Donation"
            />

        </div>
    </>
  )
}

export default DonateHeader
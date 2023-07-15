import DynamicContent from "../../../container/REUSABLES/dynamicContent"
const Header = () => {
  return (
    <>
    <div className="h-[100%]">

        <DynamicContent
            title="ABOUT US"
            img_url="/images/lettuce.jpg"
            description="PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION"
            link_name="about us"
        />
       
    </div>

    </>
  )
}

export default Header
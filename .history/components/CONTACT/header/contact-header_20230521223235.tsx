import DynamicContent from "../../../container/REUSABLES/dynamicContent"

const ContactHeader = () => {
  return (
    <>
         <div className="h-[100%]">
            <DynamicContent 
                description="our contact information"
                img_url="/images/page-title-bg.jpg"
                link_name="contact"
                title="Contact"
            />
        </div>
    </>
  )
}

export default ContactHeader
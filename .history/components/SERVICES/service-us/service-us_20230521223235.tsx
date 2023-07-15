import Image from "next/image"

const choose_bg = "/images/services/choose-bg.jpg";
const choose_icon ="/images/services/choose-icon1.png"
const choose_icon2 ="/images/services/choose-icon2.png"


const data_content = [
    {
        title: "QUALITY & RELIABILITY",
        desc: "Most gardens consist of a mix of natural & constructed elements, although even very natural garden",
        img_url: choose_icon,
    },
    {
        title: "AWARD WINNING COMPANY",
        desc: "Most gardens consist of a mix of natural & constructed elements, although even very natural garden",
        img_url: choose_icon2,
    },
]



const ServiceUs = () => {
  return (
    <>
    <div className="service-us-choose">
        <div className="choose-bg">
            <img src={choose_bg} alt="choose-bg"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="choose-wrapper">
                        <div className="choose-inner">
                            <div className="choose-content">
                                <div className="choose-title">
                                    <span className="choose-subtitle">why choose us</span>
                                    <h2 className="section-main-title">
                                        any gardening services
                                    </h2>
                                </div>
                                <div className="choose-list">
                                    {data_content.map((item, index) =>(
                                    <div className="irc-item choose-item" key={index}>
                                        <div className="irc-item-icon">
                                            <Image src={`${item.img_url}`} width={60} height={60} alt="icon-imgss"/>

                                        </div>
                                        <div className="irc-item-content">
                                            <h4>{`${item.title}`}</h4>
                                            <p>{`${item.desc}`}</p>
                                        </div>
                                    </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default ServiceUs
import Image from "next/image"
import Link from "next/link"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const about_thumb = "/images/about-thumb.jpg"
const data:AboutUsIntro[] = [
    {
        title: "about us",
        description: "TREE PLANTING ACTIVITIES & FORESTY",
        infoOne: "Most gardens consist of a mix of natural and constructed elements, although even natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.",
        infoTwo: "Design affects human. It changes the view of life and the self-image. According to the opinion specialists, a good design is a space.",
        image: about_thumb,
        button: "get in touch",
        time: "since from 2000"
    }
]
const Intro = () => {
  return (
    <div className="intro-about__container">
        {data.map((item, index) =>( 
            <div key={`${index}`} className="content-intro__container">
                <div className="img-content__about">
                    <div className="img-contain">
                        <img src={`${item.image}`} alt="about-temp" />
                    </div>
                    <div className="content-back">
                        <p>{`${item.time}`}</p>
                    </div>
                </div>
                <div className="content-about__info">
                    <h4 className="about-title">{`${item?.title}`}</h4>
                    <h3 className="about-desc">{`${item.description}`}</h3>
                    <p className="about-info">{`${item.infoOne}`}</p>
                    <p className="about-info-two">{`${item.infoTwo}`}</p>
                    
                    <button>
                        <Link href="/">
                            <p>{item.button}</p>
                            <MdOutlineKeyboardArrowRight/>
                        </Link>
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Intro
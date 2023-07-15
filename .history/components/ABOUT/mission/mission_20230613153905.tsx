import Link from "next/link"
import {MdOutlineKeyboardArrowRight, MdArrowRight,} from "react-icons/md"
import Image from "next/image"
import { HiOutlineArrowRight} from "react-icons/hi"
import { TfiAngleDoubleRight} from "react-icons/tfi"
import {CgArrowLongLeft} from "react-icons/cg"

const about_thumb = "/images/about-thumb.jpg"
const approach_icon = "/images/approach-icon.png"
const vision_icon = "/images/vision-icon.png"
const mission_icon = "/images/mission-icon.png"

const data:AboutMission[] =  [
    {
        title: "our mission",
        description: "Gardening is the practice of growing and cultivating plants as part of horticulture. In gardens, ornamental plants are often grown.",
        image: mission_icon,
        backgroundImage: about_thumb,
    },
    {
        title: "our vision",
        description: "Gardening is the practice of growing and cultivating plants as part of horticulture. In gardens, ornamental plants are often grown.",
        image: vision_icon,
        backgroundImage: about_thumb,

    },
    {
        title: "our approach",
        description: "Gardening is the practice of growing and cultivating plants as part of horticulture. In gardens, ornamental plants are often grown.",
        image: approach_icon,
        backgroundImage: about_thumb,

    },
]
const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='mission-cotainer__content'>
            {data.map((item, index) =>(
                    <div className='grid-content' key={index}>
                    <div className='info'>
                        <div className="info-img">
                         <img src={`${item?.backgroundImage}`}/>
                        </div>
                        <div className="info-content">
                            <p>{item?.description}</p>
                        </div>
                            <Link href="/contact" className="link-content">
                                <button>get in touch <MdOutlineKeyboardArrowRight/></button>
                            </Link>
                    </div>
                    <div className="img-content">
                        <div className="img">
                        <Image src={`${item?.image}`} width={100} height={100} alt="image-url"/>
                        </div>
                        
                        <h2>{item?.title}</h2>
                        <h3><TfiAngleDoubleRight className="animate-pulse"/></h3>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Mission
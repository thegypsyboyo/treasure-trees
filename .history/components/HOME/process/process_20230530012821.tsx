import { BsArrowRight } from "react-icons/bs"

const Process:React.FC = () => {

    const workFlow:WorkFlow[] = [
        {
            image: "/images/services/work-icon1.png",
            title: "Land clearing",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Seedling care",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon3.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon3.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        },
        {
            image: "/images/services/work-icon2.png",
            title: "Crop rotation",
            description: "Whether you are looking for plants, trees, shrubs or garden"
        }
    ]
  return (
    <div className="work-process-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <span className="section-subtitle">work flow</span>
                        <h2 className="section-main-title mb-45">how we work</h2>
                    </div>
                </div>
            </div>
            <div className="how-work-wrapper">
                <div className="work-steps" >
                {workFlow.map((work, index) => (  
                    <div className="work-step" key={index}>
                        <div className="process-workflow-border" />
                        <div className="work-step-icon">
                            <img src={work.image} alt="icon" />
                             <i>
                                <BsArrowRight/>
                            </i>
                        </div>
                        <h4>{work.title}</h4>
                        <p>{work.description}</p>
                    </div>
                ))}
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process
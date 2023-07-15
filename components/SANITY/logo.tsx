import Image from "next/image"


import "../../styles/sanity.scss"


const logo = "/images/blog/blog-13.jpg"

const Logo = (props:any) => {
    const {renderDefault,title} = props;
    return (
        <div className="outer">
            {/* <>{renderDefault(props)}</> */}

            <div>
                <div className="logo-img-sanity">
                    <Image src={`${logo}`} fill alt="logo"/>
                </div>

            </div>
            <>{renderDefault(props)}</>
    </div>
    )
}

export default Logo;
import Link from "next/link"
import {HiArrowUturnLeft} from "react-icons/hi2"

const StudioNavbar = (props:any) => {
  return (
    <div>
        <div className="navbar-sanity">
            <Link href="/" className="nav-arrow-sanity">
                <div className="sanity-svg">
                <HiArrowUturnLeft className="animate-zoom_in_out"/>
                </div>
                <span>go back</span>
            </Link>

            <div className="info-about-us">
               <h2>The drive for restoration</h2>
               <Link href="mailto:lewisonyango9@gmail.com">
                <span>contact me</span> : <p>lew@email.com</p></Link> 
            </div>
        </div>
        <>{props.renderDefault(props)}</>

    </div>
  )
}

export default StudioNavbar
"use client"
import Image from "next/image"
import {RiMailOpenFill} from "react-icons/ri"
import {HiOutlineArrowNarrowRight } from  "react-icons/hi"

const newsletter = "/images/newsletter-bg.jpg"

const NewsLetter = () => {
  return (
    <>
         {/* <div className="newsletter-container">
        </div> */}
        <div className="newletter-bg-container"  style={{backgroundImage: `url(${newsletter})`}}>
            <div className="newletter-wrapper">
                <div className="content">
                    <h3>GET WEEKLY NEWSLETTER & OFFERS</h3>
                    <h1>CLASSY OFFERS TOO.</h1>
                </div>
                <form className="form-wrapper">
                    <label htmlFor="">
                        <div className="form-left">
                        <RiMailOpenFill/>
                        <input type="email" placeholder="Email Adress"/>
                        </div>
                        <button>
                            <p>subscribe</p>
                            <HiOutlineArrowNarrowRight/>
                        </button>
                    </label>

                </form>
            {/* <Image src={`${newsletter}`} width={400} height={400} alt=""/> */}
            </div>
        </div>
    </>

  )
}

export default NewsLetter
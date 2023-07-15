"use client"

import {RiQuillPenFill} from "react-icons/ri"
import {BsPersonFill} from "react-icons/bs"
import {MdEmail, MdMessage} from "react-icons/md"

import {
    faLeaf,
  } from "@fortawesome/free-solid-svg-icons";
  

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contact_img = "/images/contact-img.jpg"
const data = [
    {
        name: "send us a message",
        title: "SEND US A MESSAGE FOR NEXT PROJECT",
        img: contact_img,
        button_name: "get a quote",
    }
]


const ContactInfo = () => {
  return  ( 
    <div className="contact-info__main pt-[120px]">
        <div className="contact-info__container">
            <div className="contact-wrapper__container">
                <div className="contact-wrapper__content">
                    <div className="contact-title">
                        <span className="contact-subtitle">
                            call to acion
                        </span>
                        <h2 className="contact-main__title mb-[35px]">
                            send us a message for next project
                        </h2>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-input__field">
                                        <input type="text"  placeholder="Enter your name"/>
                                        <div className="input-icon-name">
                                            <BsPersonFill/>    
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6"></div> */}
                                <div className="col-sm-6">
                                    <div className="single-input__field">
                                        <input type="email"  placeholder="Enter email"/>
                                        <div className="input-icon-name">
                                            <MdEmail/>    

                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="single-input__field">
                                        <textarea name="message" placeholder="Message">
                                        </textarea>
                                        <div className="input-icon-name">
                                            <RiQuillPenFill/>    
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="contact-btn">
                                <button type="submit" className="fill-contact__btn">
                                    <FontAwesomeIcon icon={faLeaf}/>
                                    <span>get a quote</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-wrapper__img">
                    <Image src={contact_img} width={600} height={600} alt="contact-img"/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ContactInfo
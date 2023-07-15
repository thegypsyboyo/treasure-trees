"use client"
import {useEffect, useRef, useState} from "react"
import {RiQuillPenFill} from "react-icons/ri"
import {BsPersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

import {
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import urlFor from "@/lib/urlFor"

const contact_img = "/images/contact-img.jpg"
const data = [
    {
        name: "send us a message",
        title: "SEND US A MESSAGE FOR NEXT PROJECT",
        img: contact_img,
        button_name: "get a quote",
    }
]

export default function  ContactInfo () {

    const usernameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");

    async function submitForm(e) {
        e.preventDefault();
        // Getting the values from their useRef hooks
        let username,email, message;
        username = usernameRef.current.value;
        email = emailRef.current.value;
        message = messageRef.current.value;
        //Some form Validation
        if (!username || !email || !message) {
          alert("Failed: Ensure to fill all form inputs");
          return;
        }
        // Clear the form inputs after submit
        usernameRef.current.value =
        emailRef.current.value =
        messageRef.current.value = "";
    
        // TODO: Send the form  values to an api route
        const formValues = { username, email, message };
        let result;
        try {
            let data = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            });
            result = await data.json();
            
        } catch (error) {
            result = {message: `Failed: ${ error.message }`}
        }
        alert(result.message); // Gives the user some sort of feedback after the form has been processed
        
    
    }
    const [sliderData, setSLiderData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchSliderData = async () => {
        try {
          const query = groq`*[_type == "contactInfo"] {
            ...,
          } | order(_createdAt asc)`
          const response = await client.fetch(query);
  
          setSLiderData(response);
          setIsLoading(false);
          console.log("Fetched Data... ",response)
  
        } catch (error) {
          console.error("Error fetching data: ", error)
          setIsLoading(false);
        }
  
      }
      fetchSliderData();
    }, []) 

    console.log("Contact info: ", sliderData)

  return  ( 
    <div className="contact-info__main pt-[120px]">
            {/* {sliderData? ( */}
        <div className="contact-info__container">
            <div className="contact-wrapper__container">
                <div className="contact-wrapper__content">
                    <div className="contact-title">
                        <span className="contact-subtitle">
                           {sliderData?.subtitle}
                        </span>
                        <h2 className="contact-main__title mb-[35px]">
                            {sliderData?.title}
                        </h2>
                    </div>
                    <div className="contact-form">
                        <form action="/"  onSubmit={submitForm}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-input__field">
                                        <input type="text"  placeholder="Enter your name" required ref={usernameRef}/>
                                        <div className="input-icon-name">
                                            <BsPersonFill/>    
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6"></div> */}
                                <div className="col-sm-6">
                                    <div className="single-input__field">
                                        <input type="email"  placeholder="Enter email" required ref={emailRef}/>
                                        <div className="input-icon-name">
                                            <MdEmail/>    

                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="single-input__field">
                                        <textarea name="message" placeholder="Message" required ref={messageRef}>
                                        </textarea>
                                        <div className="input-icon-name">
                                            <RiQuillPenFill/>    
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="contact-btn">
                                <button type="submit" className="fill-contact__btn" href="/">
                                    <FontAwesomeIcon icon={faLeaf}/>
                                    <span>{sliderData?.buttonName}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="contact-wrapper__img">
                    <Image src={urlFor(sliderData?.image).url()} width={600} height={600} alt="contact-img"/>
                </div> */}
            </div>
        </div>
            {/* ) : (
                <div className="flex items-center">Loading ...</div>
            )} */}
    </div>
    
  )
}

// export default ContactInfo
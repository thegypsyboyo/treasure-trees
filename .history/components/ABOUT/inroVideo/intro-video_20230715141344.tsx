"use client"
import Image from "next/image"
import {FaPlay} from "react-icons/fa"
import React, { useState, useEffect } from "react"

import ModalVideo from "react-modal-video"



const IntroVideo:React.FC<AboutVideo> = ({ channel, videoId, bgImage})=> {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);


  return (
    <div className="itro-video__container">
        <div className="intro-content-container">
            <div className="img-video-intro">
                <Image src={bgImage} width={400} height={400} alt="video"/>
            </div>
                <ModalVideo 
                    channel={channel} 
                    isOpen={isOpen}
                    videoId={videoId}
                    onClose={() => setIsOpen(false)}
                />
                <div className="pop-modal">
                <button onClick={() => setIsOpen(true)}>
                <FaPlay className=""/>
                </button>
                </div>
            <div className="content-inner-video">
            </div>
                <div className="content-intro">
                    {/* <p>{description}</p> */}
                </div>

        </div>
    </div>

  )
}

export default IntroVideo

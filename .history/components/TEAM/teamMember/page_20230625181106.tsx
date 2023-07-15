import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const page = () => {
  return (
    <div className='team-details-area'>
        <div className="container">
            <div className="team-details-wrapper">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="member-img">
                            <img src="" alt="" />
                            <div className="member-contact">
                                <ul>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i>
                                                    <FontAwesomeIcon icon={faPhone}/>
                                                </i>
                                            </div>
                                            <p>
                                                Tel: 
                                                <a href="tel:+123-4561-5523">+123-4561-5523</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
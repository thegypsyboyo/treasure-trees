"use client"
import ContactHeader from "../../../components/CONTACT/header/contact-header"
import ContactInfo from "../../../components/CONTACT/contact-info/contact-info"
import ContactMap from "../../../components/CONTACT/contact-map/contact-map"

import "../../../styles/about.scss"
import "../../../styles/globals.css"
import "../../../styles/contact.scss"
import React from "react"

export const metadata = {
  title: 'Contact Us || Reach Out to Treasure Trees Today For Any Inquiries',
  description: 'Treasure trees contact details and how to reach us incase of any questions or inquiries we can help with.',
}

const Page = () => {
  return (
    <React.Fragment>

      <ContactHeader/>
      <ContactInfo/>
      <ContactMap/>
      
    </React.Fragment>
  )
}

export default Page
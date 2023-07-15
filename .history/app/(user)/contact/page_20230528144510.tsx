"use client"
import ContactHeader from "../../../components/CONTACT/header/contact-header"
import ContactInfo from "../../../components/CONTACT/contact-info/contact-info"
import ContactMap from "../../../components/CONTACT/contact-map/contact-map"

import "../../../styles/about.scss"
import "../../../styles/globals.css"
import "../../../styles/contact.scss"
import React from "react"

export const metadata = {
  title: 'Donate Now || Donate to the Treasure Trees Cause',
  description: 'Generated by create next app',
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
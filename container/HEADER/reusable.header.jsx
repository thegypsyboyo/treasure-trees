// ReusableHeader.js

import Image from "next/image";
import headerData from "./header.data";

import { RxDoubleArrowLeft } from "react-icons/rx"

const ReusableHeader = ({ page }) => {
  const { title, link_name, imgUrl, description } = headerData;
  return (
    <div className="relative reusable-header-styles" >
      <Image src={imgUrl} fill alt="img-head"/>
      <div className="content-container">
        <div className="content-app">
          <p>{description}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="reusable-nav">
        <div className="bottom-nav-reusable">
          <h3>{title}</h3>
          <RxDoubleArrowLeft className="animate-pulse"/> 
          <p className="nav-inner">{link_name}</p>
        </div>
      </div>
    </div>
  )
}

export default ReusableHeader;

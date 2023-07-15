import Image from "next/image";
import Link from "next/link";
import { RxDoubleArrowLeft } from "react-icons/rx";

type DynamicContentProps = {
    img_url: string,
    title: string,
    description: string,
    link_name: string,
};

function DynamicContent({img_url, title, description, link_name}:DynamicContentProps) {

  return (
        <>
        
        <div className="page-title-area" >
            <Image src={img_url} fill alt="mainImage" className="img-after"/>
            <div className="content-container">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                      <div className="page-title-wrapper">
                        <p>{description}</p>
                        <h3 className="page-title">{title}</h3>
                      </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="portfolio-area">
              <div className="container">
                <div className="breadcrump-menu">
                  <nav className="breadcrump-trial">
                    <ul className="trial-items">
                      <li className="trial-begin">
                        <Link href="/"><span>Home</span>
                        </Link>
                      <RxDoubleArrowLeft className="animamate-pulse"/>
                      </li>
                      <li className="trial-end">
                        <span>{link_name}</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
    
        </div>
        </>
    
      )
}

export default DynamicContent;
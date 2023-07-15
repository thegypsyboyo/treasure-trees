'use client'

import React, { useState, useEffect, useRef } from "react"
import Link from 'next/link';
import {FaInstagram, FaPlus, FaSearch, FaTwitch, FaYoutube} from "react-icons/fa"
import {FaTwitter, FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {MdClose, MdLocationOn,MdKeyboardArrowLeft, MdKeyboardArrowDown} from "react-icons/md"
import {GiAlarmClock} from "react-icons/gi"
import {BsEnvelopeOpen, BsTelephone} from "react-icons/bs"
import { BiDonateBlood, BiPhone } from "react-icons/bi";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
// const logo = "/images/logo/logo.svg"

interface MenuItem {
    id: number;
    label: string;
    path: string;
    children?: MenuItem[];

}


const menuItems = [
    {
      id: 1,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      label: 'About',
      path: '/about',
      children: [
        {
          id: 17,
          label: 'About Us',
          path: '/about'
        },
        {
          id: 19,
          label: 'The Team',
          path: '/team'
        },
      ]
    },
    {
      id: 3,
      label: 'Our Work',
      path: '/services',
    },
    {
      id: 6,
      label: 'Pages',
      path: '#',
      children: [
        {
          id: 7,
          label: 'Portfolio',
          path: '/portfolio'
        },
        {
          id: 8,
          label: 'FAQs',
          path: '/FAQ'
        },
        {
          id: 9,
          label: 'Gallery',
          path: '/portfolio'
        },
      ]
    },
    {
        id: 13,
        label: "Contact",
        path: "/contact"
    },
    {
        id: 24,
        label: "Donate",
        path: "/donate"
    }
];


const Navbar = () => {
    const [isMetaHeaderSticky, setIsMetaHeaderSticky] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [navSocials, setNavSocials] = useState<NavbarSocials[] | null >(null)
    const [loading, setLoading] = useState(true);
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleToggleMenuClose = () =>  {
        setIsOpen(false)
    }
    // code to handle click outside to close the menu
    // const handleClick = (event: MouseEvent) => {
    //     if (!menuRef.current?.contains(event.target as Node)) {
    //       handleToggleMenuClose();
    //     }
    // };
    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClick);
      
    //     return () => {
    //       document.removeEventListener('mousedown', handleClick);
    //     };
    // }, []);
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!menuRef.current?.contains(target) && isOpen) {
          handleToggleMenuClose();
        }
    };


   
    // function for dynamic rendering of the menu items
    const toggleMenu = (id: number) =>  {
        setActiveMenu((prev) => (prev === id ? null : id));
    };

    const handleSubmenuClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        // add other logic here for handling submenu click
    }

    const renderMenuItem = (item: MenuItem) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = activeMenu === item.id;
    
        return (
          <li
            key={item.id}
            className={`menu-item-has-children has-dropdown ${isActive ? 'active' : ''}`}
            onClick={handleSubmenuClick}
          >
            {/* <Link href={item.path}> */}
              <span
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  }
                }}
              >
                <Link href={item.path}>
                    {item.label}
                </Link>
                {hasChildren && (isActive ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />)}
              </span>
            {/* </Link> */}
            {hasChildren && (
              <ul className={`sub-menu ${isActive ? 'active' : ''}`}>
                {item.children?.map((child) => renderMenuItem(child))}
              </ul>
            )}
          </li>
        );
    };


    useEffect(() => {
        function handleScroll() {
          const metaHeader = document.querySelector(".meta-header-area") as HTMLElement;
          const mainHeader = document.querySelector(".header-main-2") as HTMLElement;
          const currentScrollPosition = window.scrollY;

          if( currentScrollPosition > mainHeader.offsetTop + mainHeader.offsetHeight) {
            setIsMetaHeaderSticky(true);
            metaHeader.style.display = "block";
          }else if (window.scrollY <= 0) { // check if the user has scrolled to the top of the page
            setIsMetaHeaderSticky(false);
            metaHeader.style.display = "block"; // show the meta header
          }  else {
            setIsMetaHeaderSticky(false);
            metaHeader.style.display = "none";
          }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        const fetchNavSocials = async () => {
            try {
                const query = groq`*[_type == "navbar"] {
                    ...,
                    socials[]->{
                        platform,
                        url
                    }
                }`
                const response = await client.fetch(query);
                setNavSocials(response);
                setLoading(false);
            } catch (error) {
                console.error("Error Loading Items: ", error);
                setLoading(false);
            }
        }
        fetchNavSocials();
    }, []) 
  return (
    <React.Fragment>
       
        <header className="header-main">
            <div className="header-top-area" >
            {navSocials? (
                <div className="container" >
                    {navSocials?.map((item, index) => (
                    <div className="header-top-inner" key={index}>
                        <div className="header-top-left">
                            <div className="header-top-socials">
                                <div className="social-links">
                                    <ul>
                                    {item.socials.map((social, index) => (       
                                        <li key={index}>
                                        <a href={social.url} rel="noreferrer noopener" target="_blank">
                                            {/* <FaFacebookF/> */}
                                            {social.platform === "facebook" && <FaFacebookF/>}
                                            {social.platform === "instagram" && <FaInstagram/>}
                                            {social.platform === "linkedin" && <FaLinkedinIn/>}
                                            {social.platform === "twitter" && <FaTwitter/>}
                                            {social.platform === "twitch" && <FaTwitch/>}
                                            {social.platform === "youtube" && <FaYoutube/>}    
                                        </a>
                                        </li>
                                        ))}

                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-top-right">
                            <div className="meta-items">
                                <div className="meta-item">
                                    <div className="meta-icon">
                                        <MdLocationOn/>
                                    </div>
                                    <div className="meta-text">
                                        <p>
                                            <a href="#">{item.locationAddress}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            ): (
            <div>
                <p className="flex justify-center">Loading ...</p>
            </div>
            )}
            </div>

            <div className={`meta-header-area ${isMetaHeaderSticky ? "sticky" : "" }`}>
                {navSocials? (
                <div className="container">
                    {navSocials?.map((item, index) => (
                    <div className="meta-header-inner" key={index}>
                        <div className="meta-header-left">
                            <div className="header-logo">
                                {item.logo ? (
                                <Link href="/">
                                    <img src={urlFor(item?.logo).url()} alt="logo" />
                                </Link>
                                ): (
                                    <Link href="/">
                                    <img src="/images/logo/logo.svg"alt="logo" />
                                </Link>
                                )}
                            </div>
                        </div>
                        <div className="meta-header-right">

                            {isMetaHeaderSticky ? (                           
                            <div className="mobile-menu">
                                <ul>
                                    <li className="active-class menu-item-has-children">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className=" menu-item-has-children">
                                        <Link href="/about">About <FaPlus/></Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/team">Team</Link></li>
                                            
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/services">Our Work</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/services">Service Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/portfolio">Knowledge</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="/FAQ">FAQ</Link></li>
                                          
                                         </ul>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li><Link href="/contact">Contact</Link></li>             
                                </ul>          
                            </div>
                             ): (
                            <div className="meta-items meta-header-meta-items d-none">
                                <div className="meta-item d-none">
                                    <div className="meta-icon">
                                        <BiPhone/>
                                    </div>
                                    <div className="meta-content">
                                        <p>{item.emergencyContact}</p>
                                        <div className="meta-title">CONTACT INFO</div>
                                    </div>
                                </div>
                                <div className="meta-item d-none">
                                    <div className="meta-icon">
                                        <BsEnvelopeOpen/>
                                    </div>
                                    <div className="meta-content">
                                        <p>{item.emailAddress}</p>
                                        <div className="meta-title">Email Address</div>                
                                    </div>
                                </div>
                            </div>
                            )}
                                                       
                           {isMetaHeaderSticky ? (                         
                                <Link href="/donate" className="border-btn-rounded sticky-link">
                                 <BiDonateBlood/>
                                 <span>Donate now</span>
                              </Link>
                            ): (
                                <Link href="/donate" className="border-btn-rounded">
                                <BiDonateBlood/>
                                <span>Donate now</span>
                             </Link>
                            )}
                             
                            <div className="menu-bar-toggle" onClick={handleToggleMenu}>
                                <div className="side-toggle">
                                    <div className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                    ))}
                </div>
                ): (
                    <div>
                        <p className="flex justify-center">Loading ...</p>
                    </div>
                )}
            </div>

            <div className="header-main-2">
                {navSocials? (

                <div className="container">
                    {navSocials.map((item,index) =>(
                    <div className="row" key={index}>
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main-content-wrapper">
                                <div className="header-main-left">
                                    <div className="header-menu">
                                        <div className="mobile-menu">
                                            <ul>
                                                <li className="active-class menu-item-has-children">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/about">About</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/about">About Us</Link></li>
                                                        <li><Link href="/team">The Team </Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/services">Our Work</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link  href="">Knowledge</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                                        <li><Link href="/FAQ">FAQs</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>        
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="header-search">
                                        <form action="#" className="action">
                                            <div className="single-input">
                                                <input type="search" placeholder="Keyword here..." />
                                                <button type="submit">
                                                    <FaSearch/>
                                                </button>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                                <div className="header-main-right">
                                    <div className="meta-item">
                                        <div className="meta-item-icon">
                                            <BsTelephone/>
                                        </div>
                                        <div className="meta-item-content">
                                            <div className="meta-title">contact information</div>
                                            <p>
                                                <a href={`tel: ${item.emergencyContact}`}>{item.emergencyContact}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                ):  (
                    <div>
                        <p className="flex justify-center">Loading ...</p>
                    </div>
                )}
            </div>
        </header>

        {navSocials? (
        <div className={`${isOpen ? "fix" : "hidden" }`}>
        {navSocials?.map((item, index) => (
            <div className="side-info info-open" key={index}>
                <div className="side-info-content">
                    <div className="offset-widget mb-[40px]">
                        <div className="row items-center">
                            <div className="col-9">
                                {item.logo ? (
                                <Link href="/">
                                    <img src={urlFor(item.logo).url()} alt="logo" />
                                </Link>

                                ):(
                                <Link href="/">
                                    <img src="/images/logo/logo.svg" alt="logo" />
                                </Link>
                                )}
                            </div>
                            <div className="col-3">
                                <button className="side-info-close" onClick={handleToggleMenuClose}>
                                    <MdClose/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="side-mobile-menu">
                        <ul >
                            {menuItems.map((item) => renderMenuItem((item)))}
                        </ul>
                    </nav>
                    <div className="offset-search mb-[30px]">
                        <form action="#" className="filter-search-input">
                            <input type="text" placeholder="Search keyword" />
                            <button type="submit"><FaSearch/></button>
                        </form>
                    </div>
                    <div className="offset-support mb-[30px]">
                        <div className="footer-support">
                            <div className="item-support-meta">
                                <div className="item-icon">
                                    <BsTelephone/>
                                </div>
                                <div className="item-content">
                                    <p>Our Contact</p>
                                    <div className="support-number">
                                    <a href={`tel: ${item.emergencyContact}`}>{item.emergencyContact}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-social mb-[30px]">
                        <div className="footer-social">
                            <span>Connect:</span>
                            <div className="social-links">
                                <ul>
                                {item.socials.map((social, index) => (       
                                    <li key={index}>
                                    <a href={social.url} rel="noreferrer noopener" target="_blank">
                                        {social.platform === "facebook" && <FaFacebookF/>}
                                        {social.platform === "instagram" && <FaInstagram/>}
                                        {social.platform === "linkedin" && <FaLinkedinIn/>}
                                        {social.platform === "twitter" && <FaTwitter/>}
                                        {social.platform === "twitch" && <FaTwitch/>}
                                        {social.platform === "youtube" && <FaYoutube/>} 
                                    </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         ))}
        </div>
        ): (null)}

        <div className={`${isOpen ? "overlay-open" : "none"}`} />


    </React.Fragment>


  )
}

export default Navbar
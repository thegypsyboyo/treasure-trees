// const headerData = {
//     imgUrl: '/images/lettuce.jpg',
//     desc: "PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION",
//     title: "ABOUT US",
//     link_name: "about us",
//     path: "/home",
//   };
  
//   export default headerData;

const headerData = ({ title, imgUrl, description, link_name}) => {
    return (
      <>
        <div className="relative about-header-styles" >
        <Image src={imgUrl} fill alt="img-head"/>
        <div className="content-container">
          <div className="content-app">
            <p>{description}</p>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="about-nav">
          <div className="bottom-nav-about">
            <Link href="/" className="animate-bounce">
               <h3 className="animate-bounce">Go Home</h3> 
            </Link>
            <RxDoubleArrowLeft className="animate-pulse"/> 
            <p className="nav-inner">{link_name}</p>
            
          </div>
        </div>

        </div>
    </>
    );
  };
  
  export default headerData;
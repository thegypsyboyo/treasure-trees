type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _publishedAt: string;
};


type DynamicContentProps = {
    img_url: string,
    title: string,
    description: string,
    link_name: string,
};
interface HeaderPageProps {
    image: string,
    title: string,
    description: string,
    link_name: string,
};
// Navbar Socials Info;
interface NavbarSocials {
    socials: Socials[];
    emergencyContact: string;
    openingDays: string;
    closingDays: string;
    emailAddress: string;
    locationAddress: string;
    aboutWebsite: string;
    logo: string;
}

// HOME PAGE: INTRO SLIDER
interface Slider {
    image: string;
    description: string;
    title: string;
}
interface IntroSlider {
    sliders?: Slider[];
    sinceFrom: string;
    activeReviews:string;
}


// HOME FOUNDATION;
interface SkillTitle {
    title?: string;
    percentage?: string;
}
interface ImageArray {
    id?: number,
    image?: string;
}
interface HomeAbout {
    image?: ImageArray[];
    skillTitles?: SkillTitle[];
    sinceFrom: string;
    title: string;
    description: string;
}

// HOME OUR WORK
interface ServiceData {
    image: string;
    icon: string;
    title: string;
    description: string;
    slug: string;
}
//  HOME  PROCESS
interface WorkFlow {
    image: string;
    title: string;
    description: string;
}

// HOME COUNTUP
interface CountUp {
    id: number;
    value: number;
    suffix: string;
    title: string;
    description: string;
}

//  HOME FEATUES
interface Attributes {
    title?: string;
    id?: number;
}
interface OurFeatures {
    name?: string;
    image?: string;
    attribute?: Attributes[]
}

// ABOUT  US
interface AboutUsIntro {
    title: string;
    description: string;
    infoOne: string;
    infoTwo: string;
    image: string;
    button: string;
    time: string;
}

interface AboutHistory {
    title: string;
    description: string;
    image: string;
    year: string;
}

interface AboutMission {
    title: string;
    description: string;
    image: string;
    backgroundImage: string; 
}

interface AboutVideo {
    channel: 'youtube' | 'vimeo';
    videoId: string;
    bgImage: string;
    // description: string; 
}



// TEAM 
interface TeamMember{
    name: string;
    position: string;
    image: string;
    slug: slug,
    socials: Socials[];
    teamDetails: TeamDetails[]
}
interface TeamDetails  {
    image:  string,
    phone: string,
    email: string;
    location: string;
    specialization: string;
    name: string;
    bio: string;
    socials: Socials[],
    skills: SkillTitle[],
    skillSetInfo: string;
}

interface ImageLogos {
    id: number;
    image: string;
}
interface Involvement {
    title: string;
    description: string;
    imageLogos:ImageLogos[];
    mainImage: string; 
}

interface BlogTeam {
    image: string;
    date: string;
    author: string;
    title: string;
    description: string;
    slug: string;
    id: number;
}





// CONTACT MAP :
interface ContactInfo {
    Title: string;
    subtitle: string;
    image: string;
    buttonName: string;
}
interface Map {
    latitude: string;
    longitude: string;
}
interface MapLocation {
   name:string;
   mapCoordinates: Map
}
interface InfoMedia {
    title: string;
    phone: string;
    email: string;
    location: string;
}

interface ContactMap {
    // mapCoordinates : Map[];
    infoMedia: InfoMedia[];
    coordinates: MapLocation
    // infoTime: InfoTime[]


}
//  DONATION AND OTHER DATA
interface CausesItem extends Base{
    // id: number;
    title: string;
    description: string;
    image: string;
    amountDonated: string;
    amountTargeted: string;
    estimatePercentage: number;
    category: string[];
    slug: slug;
    singleCauses: SingleCauseItemDetails[];
    
}

interface SingleCauseItemDetails {
    title: string;
    firstDescription: string;
    secondDescription: string;
    thirdDescription: string;
    image: Image[];
    lastDescription: string;
    donationFormDescription: string;
    
}



interface PortfolioItem extends Base{
    [x: string]: any;
    image: string;
    title: string;
    description: string;
    budget: string;
    slug: slug;
    category: string[];
    singlePortfolioDatas: [SinglePortfolioInformation] 

}

interface SinglePortfolioInformation extends Base {
    mainImage: Image;
    listItem: ListItem[];
    portfolioDescriptionOne: string;
    portfolioDescriptionTwo: string;
    portfolioSubImage: Image[];
    quoteInfo: string;
    quoteAuthor: string;
    authorPosition: string;
    informationOnQuestion: string;
    questionAnswers: QuestionAnswers[]

}

interface QuestionAnswers {
    question: string;
    answer: string;
}

interface QnA {
    faqs: QuestionAnswers[]
}
interface Post extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: slug;
    title: string;
    description: string;
    tags: Tag[];
    postTags: [PostTags];
    views: number; // new field added here
    singlePostInformations: [SinglePostInformation];
}
interface SinglePostInformation {
    postDescriptionIntro: string;
    image: Image;
    blogTitle: string;
    blogDescriptionOne: string;
    blogSubInfoTitle: string;
    blogSubImageInfo: Image;
    blogSubInfoDescription: string;
    quoteInfo: string;
    quoteFounderName: string;
    postDescriptionEnding: string;
}

interface Service extends Base {
    // body: Block[];
    mainImage: Image;
    image: string;
    icon: string;
    slug: slug;
    title: string;
    description: string;
    servicesSlugInformation: [AllData];
    // author: Author;
    // categories: Category[];
}
interface ServiceUsContent {
    title?: string;
    description?: string;
    icon: string;
}
interface ServiceUs {
    subtitle: string;
    title: string;
    bgImage: string;
    serviceContents: ServiceUsContent[]
}


interface Author extends Base {
    image: Image;
    name: string;
    description: String;
    slug: Slug;
    socials: Socials[];
}

interface Image {
    _type: "image";
    asset: Reference;
}
interface ExtendedImage extends Image {
    url: string;
}

interface Reference {
    url: any;
    ref: string;
    _type: "reference";
}

interface SLug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    styles: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    number: number;
}
interface ListItem extends Base {
    title: string;
    name: string;
}
interface Tag extends Base {
    title: string;
}
interface Socials {
   
    // add more social media platforms as needed
    platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'twitch';
    url: string;
     
}

interface PostTags extends Base {
    title: string;
    slug: Slug;
}

interface MainPage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}


// Service Details Types;

interface Services {
  title: string;
  description: string;
  image:Image;
  id: number;
}

interface ServiceList {
  title: string;
  id: number;
}

interface SidebarMaterials {
  title: string;
  id: number;
}

interface SidebarServiceLink {
  title: string;
  id: number;
}

type ServiceMainContent = {
  image: Image;
  title: string;
  id: number;

};

interface AllData {
  services: Services[];
  image: Image;
  title: Title;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree: string;
  serviceImageOne:Image;
  sidebarImageAdd:Image;
  serviceImageTwo:Image;
  serviceList: ServiceList[];
  sidebarMaterials: SidebarMaterials[];
  sidebarServiceLink: SidebarServiceLink[];
}

interface SinglePostInformation {

    postDescriptionIntro: string;
    image: Image;
    blogTitle: string;
    blogDescriptionOne: string;
    blogSubInfoTitle: string;
    blogSubImageInfo: Image;
    blogSubInfoDescription: string;
    quoteInfo: string;
    quoteFounderName: string;
    postDescriptionEnding: string;

    


}
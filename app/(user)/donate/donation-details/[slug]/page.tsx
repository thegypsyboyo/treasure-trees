
import {groq} from "next-sanity"
import { client } from "../../../../../lib/sanity.client"
import DonateDetailsHeader from "../../../../../components/DONATE/donate-header/donation-details-header"
import "../../../../../styles/about.scss"
import "../../../../../styles/globals.css"
import DonationDetails from "../../../../../components/DONATE/donation-details/donationDetails"

type Props = {
    params: {
        slug: string
    };
};

export async function generateStaticParams() {

  const query = groq`*[_type == "cause"]
  {
    slug,
  }`;

  const slugs: CausesItem[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }))
  
}

async function Page({params: {slug}, }:Props) {

  const query = groq`*[_type=="cause" && slug.current == $slug][0]{
    ...,
    singleCauses[]->{
      image,
      firstDescription,
      secondDescription,
      thirdDescription,
      title,
      lastDescription,
      donationFormDescription,
      ...,
    }
  
  }`;
  
  const causesData:CausesItem = await client.fetch(query, { slug });

  // console.log("Causes SLug Item", causesData)



  return (
    <>
      <div>
        <DonateDetailsHeader causesData={causesData}/>
        <DonationDetails causesData={causesData}/>
      </div>
    </>
  )
}

export default Page;

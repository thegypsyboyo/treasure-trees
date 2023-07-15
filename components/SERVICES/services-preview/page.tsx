import {draftMode} from "next/headers"
import {groq} from "next-sanity"
import {client} from "../../../lib/sanity.client"
import ServicesIntro from "../services-intro/services-intro"


const query = groq`*[_type=='service']{
  ...,
  allData->{
    services[]{
      title,
      description
    },
    serviceList[]{
      title,
      id
    }
  }
} | order(_createdAt desc)`;

export default async function ServicePage() {
  const services = await client.fetch(query);
  return (
    <>
    <ServicesIntro services={services}/>
    </>
  )
}



import { groq } from "next-sanity";
import React from "react";
import ServiceDetailsHeader from "../../../../../components/SERVICES/service-details-header/service-details-header";
import ServiceDetailsContent from "../../../../../components/SERVICES/service-details/service-details-content";
import { client } from "../../../../../lib/sanity.client";

import "../../../../../styles/about.scss"
import "../../../../../styles/globals.css"
// import "../../../../../styles/single-blog.scss"


type Props = {
    params: {
        slug: string,

    };
};
export const metadata = {
  title: 'Our work details | | Take a deep dive into what we do and learn about our work.',
  description: 'Take a deep dive into what we do and learn about our work',
}
export async function generateStaticParams() {
  const query = groq`*[_type=="service"]
  {
    slug,
  }`;

  const slugs: Service[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current); // get all the slugs of the arry
  return slugRoutes.map((slug) => ({
    slug,
  }))
}


async function Post({params: {slug},}: Props){

  const query = groq`*[_type=="service" && slug.current == $slug][0]{
    ...,
    servicesSlugInformation[]->{
      
      title,
      image,
      ...,

    }
  }
  `;

  const services: Service = await client.fetch(query, { slug });
  
  return (
    <React.Fragment>
      <div>
        <ServiceDetailsHeader 
          service={services}
        />
        <ServiceDetailsContent service={services}  />

      </div>
    </React.Fragment>

  
  )
}

export default Post
import React from 'react'

import TeamHeader from '@/components/TEAM/teamMember/header' 
import Info from '@/components/TEAM/teamMember/page' 
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';

type Props = {
  params: {
      slug: string
  };
};

// export default page
export async function generateStaticParams() {

  const query = groq`*[_type == "post"]
  {
    slug,
  }`;

  const slugs: TeamMember[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }))
  
}

export async function Page({params: {slug},}:Props) {
  
  const query = groq`*[_type == "team"] {
    ...,
    "socials": socials[]->{
    platform,
    url
    },
    "teamDetails: " teamDetails[]-> {
      ...,
      "socials": socials[]->{
      platform,
      url
      },
      "skills": skills[]->{
      title,
      percentage
      },

    }
  } | order(_createdAt asc)`
  const response = await client.fetch(query, {slug});

  return(
    <>
      <TeamHeader />
      <Info/>
    </>
  )
}
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

const page = () => {
  return (
    <>
    <TeamHeader/>
    <Info/>
    </>
  )
}

export default page



export async function generateStaticParams() {
  
  const query = groq`*[_type == "team"] {
    ...,
    "socials": socials[]->{
    platform,
    url
    },
    "teamDetails: " teamDetails[]-> {
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
  const response = await client.fetch(query);

 
}
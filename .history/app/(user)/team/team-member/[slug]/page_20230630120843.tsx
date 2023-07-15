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

export async function generateStaticParams() {

const query = groq`*[_type == "team"]
{
  slug,
}`;

const slugs: TeamMember[] = await client.fetch(query);
const slugRoutes = slugs.map((slug) => slug.slug.current);
return slugRoutes.map((slug) => ({
  slug,
}))

}

async function Page({params: {slug}, }:Props) {

const query = groq`*[_type=="team" && slug.current == $slug][0]{
  name,
  position,
  image,
  "teamDetails": teamDetails[]->{
  skills[]->{
    title,
    percentage,
  },
  phone,
  email,
  bio,
  skillSetInfo,

},
}
`;

const post: TeamMember = await client.fetch(query, { slug });

console.log("Team Member",post)



return (
  <>
    <TeamHeader post={post} />
    <Info  post={post}/>
  </>
)
}

export default Page;

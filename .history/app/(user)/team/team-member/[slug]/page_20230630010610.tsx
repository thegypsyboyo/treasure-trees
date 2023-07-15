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

const query = groq`*[_type == "post"]
{
  slug,
}`;

const slugs: Post[] = await client.fetch(query);
const slugRoutes = slugs.map((slug) => slug.slug.current);
return slugRoutes.map((slug) => ({
  slug,
}))

}

async function Page({params: {slug}, }:Props) {

const query = groq`*[_type=="post" && slug.current == $slug][0]{
  ...,
  ...,
"tags": tags[]-> {
  title,
  slug,
},
"authors": authors[]->{
  name, 
  image,
  description,
  "socials": socials[]->{
      platform,
      url
  }
},
"postTags": postTags[]->{title,slug },
"categories": categories[]->{title,number},
"singlePostInformations": singlePostInformations[]->{
  postDescriptionIntro,
  image,
  blogTitle,
  blogDescriptionOne,
  blogSubInfoTitle,
  blogSubImageInfo,
  blogSubInfoDescription,
  quoteInfo,
  quoteFounderName,
  postDescriptionEnding,

},
"postTags": postTags[]->{title,slug },
}
`;

const post: Post = await client.fetch(query, { slug });

// console.log(post)



return (
  <>
    <TeamHeader/>
    <Info/>
  </>
)
}

export default Page;

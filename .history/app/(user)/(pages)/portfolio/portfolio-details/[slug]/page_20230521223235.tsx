import React from "react";
import PortfolioDetailsHeader from "../../../../../../components/PAGES/portfolio-details-header/header";
import PortfolioDetailsContent from "../../../../../../components/PAGES/porfolio-details-content/page";
import { client } from "../../../../../../lib/sanity.client";
import { groq } from "next-sanity";

import "../../../../../../styles/about.scss"
import "../../../../../../styles/globals.css"


type Props = {
  params: {
      slug: string,

  };
};

export async function generateStaticParams() {
  const query = groq`*[_type=="portfolio"] {
    slug,
  }`;

  const slugs: PortfolioItem[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  return slugRoutes.map((slug) => ({
    slug,
  }))

}

async function Post({params: {slug}}: Props){

  const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
    ...,
    singlePortfolioDatas[]-> {
    ...
  }
  }`

const querySet = groq`*[_type == 'portfolio'] | order(_createdAt desc) {
  title,
  slug,
  description,
  image,
  category,
  singlePortfolioDatas[]-> {
   ...
  }
 
} [0...100]`;



  const portfolio : PortfolioItem = await client.fetch(query, {slug})
  const allPortfolio : PortfolioItem[]= await client.fetch(querySet)

  return (
    <React.Fragment>
      <div>
        <PortfolioDetailsHeader
          
        />
        <PortfolioDetailsContent portfolio={portfolio} allPortfolio={allPortfolio}/>
      </div>
    </React.Fragment>

  
  )
}

export default Post
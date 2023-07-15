import PortfolioHeader from '../../../../components/PAGES/header/header'
import Porfolio from '../../../../components/PAGES/porfolio/porfolio'
import '../../../../styles/about.scss'
import { groq } from 'next-sanity'
import { client } from '../../../../lib/sanity.client'

const query = groq`*[_type == 'portfolio']{
  title,
  slug,
  description,
  image,
  category,
  singlePortfolioDatas[]-> {
   ...
  }
 
}`;



export default async function Page() {
  const portfolio = await client.fetch(query);
  console.log(portfolio)


  return (
    <div>
      <PortfolioHeader portfolio={portfolio}/>
      <Porfolio portfolio={portfolio} />
    </div>
  )
}

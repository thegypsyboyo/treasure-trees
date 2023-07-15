import Head from "next/head"
// import { NextSeo } from "next-seo"

type SEOProps = {
  title?: string;
  description?: string;
};
export default function CustomHead({title, description}: SEOProps) {
  const defaultTitle = "TreasureTrees";
  const defaultDesc = "A regeneration website about making environment safe";
  const Description = description ? `${description}` : defaultDesc;
  const pageTitle = title ? `${title} || ${Description}` : defaultTitle;
  return (
    <>
    {/* <NextSeo
      title= {pageTitle}
      description = {Description}

    /> */}
    <Head>
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/result.png" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    </>
  )
}

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'



function Page({ data }:any) {
    // Render data...
    if (!data) {
        return <div>Loading...</div>;
    } else {
        <div>{data}</div>
    }

    console.log("DATA AND SOME")
    return(
        <div>Some Content</div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = groq`*[_type == "navbar"] {
        ...,
        socials[]->{
            platform,
            url
        }
    }`
    const data = await client.fetch(res)
   
    // Pass data to the page via props
    return { props: { data } }
}
   
export default Page



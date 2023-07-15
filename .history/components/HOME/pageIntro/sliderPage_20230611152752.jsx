import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

const req = groq`*[_type == "navbar"] {
    ...,
    socials[]->{
        platform,
        url
    }
}`
// type Props = {
//     data: NavbarSocials;
// }

function Page({data}) {
    // Render data...
    // if (!data) {
    //     return <div>Loading...</div>;
    // } 
    // const data = await client.fetch(res);
    console.log("NEW FETCHED DATA: ")

    console.log("DATA AND SOME");
    return(
        <div>Some Content, </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const data = await client.fetch(req)
    // Pass data to the page via props
    return { props: { data } }
}
   
export default Page



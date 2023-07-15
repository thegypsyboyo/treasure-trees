import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

const res = groq`*[_type == "navbar"] {
    ...,
    socials[]->{
        platform,
        url
    }
}`

async function Page() {
    // Render data...
    // if (!data) {
    //     return <div>Loading...</div>;
    // } 
    const data = await client.fetch(res);
    console.log("NEW FETCHED DATA: ", data)

    console.log("DATA AND SOME");
    return(
        <div>Some Content, </div>
    )
}

// This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const data = await client.fetch(res)
//     // Pass data to the page via props
//     return { props: { data } }
// }
   
export default Page



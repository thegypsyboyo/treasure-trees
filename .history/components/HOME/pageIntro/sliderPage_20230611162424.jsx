export async function getServerSideProps() {
    const query = groq`*[_type == "navbar"] {
        ...,
        socials[]->{
            platform,
            url
        }
    }`
    const response = await client.fetch(query);
   
    return { props: {response } }
  }
   
  export default function Dashboard({ response }) {
    console.log("RESPONSE: ", response)
    return (
      <ul>
        data.
      </ul>
    )
  }
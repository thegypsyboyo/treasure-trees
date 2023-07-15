import { client } from '@/lib/sanity.client'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { groq } from 'next-sanity'

type Repo = {
    repo: NavbarSocials
}
export const getServerSideProps: GetServerSideProps<{repo:Repo}> = async () => {
    const query = groq`*[_type == "navbar"] {
        ...,
        socials[]->{
            platform,
            url
        }
    }`
    const repo = await client.fetch(query);
    return { props: { repo } }
  }

export default function Page ({repo}:Repo){
    console.log(repo)
    return(
        <div>Some content Here</div>
    )
}

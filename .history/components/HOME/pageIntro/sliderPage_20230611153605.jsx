import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

export const getServerSideProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    console.log("TEST: ", repo)
    return repo.stargazers_count
  }




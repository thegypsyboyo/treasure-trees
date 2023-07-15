import React from 'react'
import Some from '@/components/FAQ/some'
import Header from '@/components/FAQ/header'


export const metadata = {
  title: 'Faq | | Some of the most frequently asked questions.',
  description: 'Some of the most frequently asked questions',
}

const Page = () => {
  return (
    <>
    <Header/>
    <Some/>
    </>
  )
}

export default Page
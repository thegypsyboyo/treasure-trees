import DynamicContent from '@/container/REUSABLES/dynamicContent'
import React from 'react'

const header = () => {
  return (
    <DynamicContent
    img_url="/images/spratt.jpg"
    title="SOME ANS & Q."
    link_name="faq"
    description="Some of the frequently asked questions"
    />
  )
}

export default header

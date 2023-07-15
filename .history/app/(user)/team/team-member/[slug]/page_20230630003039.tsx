import React from 'react'

import TeamHeader from '@/components/TEAM/teamMember/header' 
import Info from '@/components/TEAM/teamMember/page' 

type Props = {
  params: {
      slug: string
  };
};

const page = () => {
  return (
    <>
    <TeamHeader/>
    <Info/>
    </>
  )
}

export default page
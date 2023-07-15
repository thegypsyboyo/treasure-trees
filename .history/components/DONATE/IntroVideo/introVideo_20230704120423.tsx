import React from 'react'
import IntroVideo from '../../ABOUT/inroVideo/intro-video'

import "../../../styles/causes.scss"


const DonateIntroVideo = () => {
  return (
    <div className='mt-[120px]'>
        <IntroVideo
            bgImage='/images/donate/donation-detail-2.jpg'
            channel='youtube'
            description='SOMETHING ABOUT THE VIDEO'
            videoId='dfl9KIX1WpU'
        />
    </div>
  )
}

export default DonateIntroVideo
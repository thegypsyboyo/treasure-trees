import React from 'react'
import IntroVideo from '../../ABOUT/inroVideo/intro-video'

import "../../../styles/causes.scss"


const DonateIntroVideo = () => {
  return (
    <div>
      {/* <div className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Join Hands To Protect</h3>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
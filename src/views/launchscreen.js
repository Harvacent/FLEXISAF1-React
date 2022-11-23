import React from 'react'

import { Helmet } from 'react-helmet'

import './launchscreen.css'

const Launchscreen = (props) => {
  return (
    <div className="launchscreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="launchscreen-launchscreen">
        <img
          alt="Rectangle115"
          src="/playground_assets/rectangle115-vmb4q-900h.png"
          className="launchscreen-rectangle1"
        />
        <img
          alt="flexilsvg133"
          src="/playground_assets/flexilsvg133-hg.svg"
          className="launchscreen-flexilsvg1"
        />
      </div>
    </div>
  )
}

export default Launchscreen

import React from 'react'

import { Helmet } from 'react-helmet'

import './welcomescreen.css'

const Welcomescreen = (props) => {
  return (
    <div className="welcomescreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="welcomescreen-welcomescreen">
        <img
          alt="Rectangle2224"
          src="/playground_assets/rectangle2224-r7ib-200h.png"
          className="welcomescreen-rectangle2"
        />
        <img
          alt="Rectangle3227"
          src="/playground_assets/rectangle3227-bjcf-200h.png"
          className="welcomescreen-rectangle3"
        />
        <span className="welcomescreen-text">
          <span>Sign up</span>
        </span>
        <span className="welcomescreen-text02">
          <span>Login</span>
        </span>
        <span className="welcomescreen-text04">
          <span>Welcome!</span>
        </span>
        <img
          alt="Line156"
          src="/playground_assets/line156-gk58.svg"
          className="welcomescreen-line1"
        />
        <img
          alt="Line2510"
          src="/playground_assets/line2510-v5hg.svg"
          className="welcomescreen-line2"
        />
        <span className="welcomescreen-text06">
          <span>Email</span>
        </span>
        <span className="welcomescreen-text08">
          <span>Password</span>
        </span>
        <span className="welcomescreen-text10">
          <span>Forgot password?</span>
        </span>
        <span className="welcomescreen-text12">
          <span>Don’t have an account?</span>
        </span>
      </div>
    </div>
  )
}

export default Welcomescreen

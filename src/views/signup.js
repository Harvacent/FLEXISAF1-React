import React from 'react'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="signup-signup">
        <span className="signup-text">
          <span>Sign up</span>
        </span>
        <img
          alt="Line1516"
          src="/playground_assets/line1516-usp.svg"
          className="signup-line1"
        />
        <img
          alt="Line2518"
          src="/playground_assets/line2518-2xfr.svg"
          className="signup-line2"
        />
        <img
          alt="Line3520"
          src="/playground_assets/line3520-0z1p.svg"
          className="signup-line3"
        />
        <img
          alt="Line4522"
          src="/playground_assets/line4522-fz3j.svg"
          className="signup-line4"
        />
        <img
          alt="Line5524"
          src="/playground_assets/line5524-oka.svg"
          className="signup-line5"
        />
        <span className="signup-text02">
          <span>Email</span>
        </span>
        <span className="signup-text04">
          <span>Full name</span>
        </span>
        <span className="signup-text06">
          <span>Phone Number</span>
        </span>
        <span className="signup-text08">
          <span>Age</span>
        </span>
        <span className="signup-text10">
          <span>Gender</span>
        </span>
        <span className="signup-text12">
          <span>Already have an account?</span>
        </span>
        <img
          alt="Rectangle34411"
          src="/playground_assets/rectangle34411-ykcx-200h.png"
          className="signup-rectangle3"
        />
        <span className="signup-text14">
          <span>Sign up</span>
        </span>
        <img
          alt="Rectangle24411"
          src="/playground_assets/rectangle24411-q7q-200h.png"
          className="signup-rectangle2"
        />
        <span className="signup-text16">
          <span>login</span>
        </span>
      </div>
    </div>
  )
}

export default Signup

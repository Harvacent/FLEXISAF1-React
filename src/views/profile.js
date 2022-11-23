import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-profile">
        <img
          alt="Rectangle11346"
          src="/playground_assets/rectangle11346-j4zu-900h.png"
          className="profile-rectangle1"
        />
        <span className="profile-text">
          <span>Johnsonali1@gmail.com</span>
        </span>
        <span className="profile-text02">
          <span>Johnson Ali</span>
        </span>
        <span className="profile-text04">
          <span>General assessment</span>
        </span>
        <span className="profile-text06">
          <span>Todays task</span>
        </span>
        <img
          alt="more11380"
          src="/playground_assets/more11380-zzbd-200h.png"
          className="profile-more1"
        />
        <div className="profile-maskgroup">
          <img
            alt="Rectangle151310"
            src="/playground_assets/rectangle151310-mede-200h.png"
            className="profile-rectangle15"
          />
          <img
            alt="businessmanleadermodernofficewithbusinesspeoplewor1395"
            src="/playground_assets/businessmanleadermodernofficewithbusinesspeoplewor1395-hkt-300w.png"
            className="profile-businessmanleadermodernofficewithbusinesspeoplewor"
          />
        </div>
        <img
          alt="Rectangle151399"
          src="/playground_assets/rectangle151399-495e-200h.png"
          className="profile-rectangle151"
        />
        <img
          alt="Rectangle181312"
          src="/playground_assets/rectangle181312-l4i5-400w.png"
          className="profile-rectangle18"
        />
        <img
          alt="Rectangle31312"
          src="/playground_assets/rectangle31312-ukn-200h.png"
          className="profile-rectangle3"
        />
        <span className="profile-text08">
          <span>Complete task</span>
        </span>
        <img
          alt="Rectangle161311"
          src="/playground_assets/rectangle161311-pyy-200h.png"
          className="profile-rectangle16"
        />
        <img
          alt="Rectangle171311"
          src="/playground_assets/rectangle171311-su77-200h.png"
          className="profile-rectangle17"
        />
        <span className="profile-text10">
          <span>Attendance</span>
        </span>
        <span className="profile-text12">
          <span>Assignment</span>
        </span>
        <span className="profile-text14">
          <span>
            <span>
              Weldone!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>You are almost set for today’s class.</span>
          </span>
        </span>
        <span className="profile-text19">
          <span>Project</span>
        </span>
        <span className="profile-text21">
          <span>90%</span>
        </span>
        <span className="profile-text23">
          <span>90%</span>
        </span>
        <span className="profile-text25">
          <span>60%</span>
        </span>
        <span className="profile-text27">2</span>
        <img
          alt="back11312"
          src="/playground_assets/back11312-jxs-200h.png"
          className="profile-back1"
        />
      </div>
    </div>
  )
}

export default Profile

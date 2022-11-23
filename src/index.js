import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Assignment from './views/assignment'
import Class from './views/class'
import Launchscreen from './views/launchscreen'
import Home from './views/home'
import Welcomescreen from './views/welcomescreen'
import Profile from './views/profile'
import Signup from './views/signup'
import Chats from './views/chats'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Assignment} exact path="/assignment" />
        <Route component={Class} exact path="/class" />
        <Route component={Launchscreen} exact path="/launchscreen" />
        <Route component={Home} exact path="/home" />
        <Route component={Welcomescreen} exact path="/welcomescreen" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Signup} exact path="/signup" />
        <Route component={Chats} exact path="/chats" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

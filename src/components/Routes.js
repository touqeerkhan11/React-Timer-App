import React, { Component } from 'react'
import { Route, IndexRoute, hashHistory } from 'react-router'

import Main from 'Main'
import Countdown from 'Countdown'
import Timer from 'Timer'

// Load foundation-sites
$(document).foundation()

// App styles
require('style!css!sass!src/styles/app.scss')

export default (
  <Route path="/" component={Main}>
  <IndexRoute component={Timer} />
  <Route path="countdown" component={Countdown} />
</Route>
)

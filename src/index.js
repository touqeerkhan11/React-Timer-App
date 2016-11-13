import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from 'Routes';
import { Router, hashHistory } from 'react-router'

render(
  <AppContainer>
    <Router history = { hashHistory } >
      {Routes}
    </Router>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('Routes', () => {
    const RootContainer = require('Routes').default;
    render(
      <AppContainer>
        <Router history = {hashHistory}>
          {RootContainer}
        </Router>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

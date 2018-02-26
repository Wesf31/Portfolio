import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import router from './router/router'


class App extends Component {
  render() {
    return (
      <div >
        {router}
      </div>
    );
  }
}

export default withRouter(App);

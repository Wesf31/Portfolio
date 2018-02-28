import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCardData } from './ducks/reducers/resultsReducer'
import router from './router/router'
import NavBar from './components/NavBar'


class App extends Component {
  componentDidMount() {
    const {
      cardDataLoaded, getCardData,
    } = this.props
    if (!cardDataLoaded) {
      getCardData()
    }
  }

  render() {
    return (
      <div >
        <NavBar />
        {router}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profilesLoaded: state.resultsReducer.cardDataLoaded,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCardData,
}, dispatch)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

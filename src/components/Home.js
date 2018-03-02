import React from 'react'
import { Typography, withStyles } from 'material-ui'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCardData } from './../ducks/reducers/resultsReducer'
import Info from './info'
import NavBar from './NavBar'


const Home = ({ classes, cardData }) => (
  <div>
    <div className={classes.background}>
      <NavBar />
    </div>
    <Info />
  </div>
)
const styles = {
  background: {
    backgroundImage: "url('http://res.cloudinary.com/dhowdfbmx/image/upload/v1519688377/Screen_Shot_2017-12-29_at_12.40.46_AM_twlkus.png')",
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
  },
}

const mapStateToProps = state => ({
  cardData: state.resultsReducer.cardData,
})

export default withRouter((connect(mapStateToProps, { getCardData })(withStyles(styles)(Home))))
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button';
import CreateCard from './createCard'
import Appointment from './appointment'
import { getCardData } from './../ducks/reducers/resultsReducer'

const NavBar = ({
  classes, cardData,
}) => (
  <div className={classes.root}>
    <Button component={Link} to="/" label="Home">
      Home
    </Button>
    <CreateCard />
    <Button component={Link} to="/gallery">
    Gallery
    </Button>
    <Appointment />
  </div>
)
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  root: {
    width: '100%',
    display: 'flex',
    marginBottom: '0px',
  },
};

const mapStateToProps = state => ({
  cardData: state.resultsReducer.cardData,
})
export default withRouter((connect(mapStateToProps, { getCardData })(withStyles(styles)(NavBar))))

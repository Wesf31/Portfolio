import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia, Paper } from 'material-ui/Card';
import axios from 'axios';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { getCardData } from './../ducks/reducers/resultsReducer'
import NavBar from './NavBar'


const DisplayCard = ({
  cardData, classes, setCardData,
}) => {
  const deleteProfile = (userName) => {
    axios.delete(`/api/deleteCard/${userName}`).then((res) => {
      setCardData(res.data)
    })
  }

  const card = cardData && cardData.map((card, index) => (
    <div key={index} >
      <Card className={classes.card}>
        {/* <Paper elevation={3} className={classes.paper}> */}
        <CardMedia className={classes.media} image={card.profilepic} />
        <CardContent>
          <Typography clasName={card.profilename} />
          <Button onClick={() => deleteProfile(card.profilename)} color="primary">
                Delete
          </Button>
        </CardContent>
        {/* </Paper> */}
      </Card>
    </div>
  ))

  return (
    <div>
      <NavBar />
      {card}
    </div>
  )
}

const styles = {
  card: {
    maxWidth: 345,
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    height: 200,
  },
  paper: {
    width: '95%',
    right: '2.5%',
    '@media (min-width: 769px)': {
      width: '100%',
      right: '0%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  image: {
    height: '250px',
    '@media (min-width: 769px)': {
      width: '500px',
      margin: '20px 0',
    },
  },
};

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cardData: state.resultsReducer.cardData,
})

export default withRouter((connect(mapStateToProps, { getCardData })(withStyles(styles)(DisplayCard))))

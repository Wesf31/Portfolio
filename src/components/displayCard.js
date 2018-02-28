import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import axios from 'axios';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


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
        <CardMedia
          className={classes.media}
          image={card.profilepic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {card.profilename}
          </Typography>
          <Button onClick={() => deleteProfile(card.profilename)} color="primary">
                Delete
          </Button>
        </CardContent>
      </Card>
    </div>
  ))

  return (
    <div>
      {card}
    </div>
  )
}

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayCard)
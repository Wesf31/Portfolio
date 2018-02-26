import React from 'react'
import { Typography, withStyles } from 'material-ui'


const Home = ({ classes }) => (
  <div>
    <Typography>
       Home
    </Typography>
  </div>
)
const styles = {
  background: {
    backgroundImage: 'url(./bg.png)',
    backgroundSize: 'cover',
    width: '100%',
  },
}

export default withStyles(styles)(Home)
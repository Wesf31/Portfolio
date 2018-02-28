import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button';

const NavBar = ({
  classes,
}) => (
  <div>
    <Button component={Link} to="/" label="Home">
      Home
    </Button>
  </div>
)
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};
export default withStyles(styles)(NavBar)
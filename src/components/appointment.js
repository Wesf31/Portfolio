import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class Appointment extends React.Component {
  state = {
    open: false,
    phone: '',
    time: 'yyyy-MM-ddThh:mm',
    email: '',
    name: '',
    comment: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      phone: '',
      time: 'yyyy-MM-ddThh:mm',
      email: '',
      name: '',
    });
  };
  handleClickSubmit = () => {
    this.setState({
      open: false,
      phone: '',
      time: 'yyyy-MM-ddThh:mm',
      email: '',
      name: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    let {
      phone,
      time,
      comment,
      desiredDate,
    } = this.state
    axios.post('/api/appointment', {
      phone, time, comment, desiredDate,
    })
    axios.put('/api/appointment/:id', { phone })
      .then(this.props.history.push('/'))
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Schedule Appointment</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Appointment Info</DialogTitle>
          <DialogContent>

            <TextField
              margin="dense"
              label="Name"
              type="name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Comment"
              type="name"
              value={this.state.comment}
              onChange={e => this.setState({ comment: e.target.value })}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Phone Number"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
              type="Phone Number"
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="name"
              fullWidth
            />

            <TextField
              id="datetime-local"
              label="Desired time"
              type="datetime-local"
              defaultValue="yyyy-MM-ddThh:mm"
              onChange={e => this.setState({ time: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
                 }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickSubmit} color="primary">
              Schedule Appointment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  },
});


export default (withStyles(styles)(Appointment))
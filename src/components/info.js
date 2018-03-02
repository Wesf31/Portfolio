import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      InfoPageHeader: '',
      InfoPageTextBody: '',
      SmallBox1Header: '',
      SmallBox1Text: '',
      SmallBox2Header: '',
      SmallBox2Text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    axios.get('/api/info')
      .then(res => (this.setState({
        InfoPageHeader: res.data[0].infopageheader,
        InfoPageTextBody: res.data[0].infopagetextbody,
        SmallBox1Header: res.data[0].smallbox1header,
        SmallBox1Text: res.data[0].smallbox1text,
        SmallBox2Header: res.data[0].smallbox2header,
        SmallBox2Text: res.data[0].smallbox2text,
      })))
  }

  handleSubmit(e) {
    console.log(this.props.user)
    e.preventDefault()
    let {
      InfoPageHeader,
      InfoPageTextBody,
      SmallBox1Header,
      SmallBox1Text,
      SmallBox2Header,
      SmallBox2Text,
    } = this.state
    axios.post('/api/info', {
      InfoPageHeader, InfoPageTextBody, SmallBox1Header, SmallBox1Text, SmallBox2Header, SmallBox2Text,
    })
  }

  render() {
    const { classes } = this.props
    // (<div className="Wrapper">
    //   <div className="NavBar" />
    //   <div className="Container-1">
    //     <div className="InfoPage">
    //       <div className="InfoPicture" />
    //       <div className="InfoPageTextBody">
    //         <p className="InfoPageHeader">
    //           {this.state.InfoPageHeader}
    //         </p>
    //         <p className="InfoPageTextMain">
    //           {this.state.InfoPageTextBody}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="Container-2">
    //     <div className="SmallBox1">
    //       <p className="SmallBox1Header">
    //         {this.state.SmallBox1Header}
    //       </p>
    //       <p className="SmallBox1Text">
    //         {this.state.SmallBox1Text}
    //       </p>
    //     </div>
    //     <div className="SmallBox2">
    //       <p className="SmallBox2Header">
    //         {this.state.SmallBox2Header}
    //       </p>
    //       <p className="SmallBox2Text">
    //         {this.state.SmallBox2Text}
    //       </p>
    //     </div>
    //   </div>
    //  </div>)

    return (
      <div className={classes.wrapper}>
        <div className={classes.container1}>
          <div className={classes.infoPage}>
            <div className={classes.infoPicture} />
            <div className={classes.infoPageTextBody}>
              <textarea
                className={classes.infoPageHeader}
                value={this.state.InfoPageHeader}
                onChange={e => this.setState({ InfoPageHeader: e.target.value })}
              />
              <textarea
                className={classes.infoPageTextMain}
                value={this.state.InfoPageTextBody}
                onChange={e => this.setState({ InfoPageTextBody: e.target.value })}
              />
              <input type="submit" value="Save Changes" onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.smallBox}>
            <textarea
              value={this.state.SmallBox1Header}
              onChange={e => this.setState({ SmallBox1Header: e.target.value })}
            />
            <textarea
              value={this.state.SmallBox1Text}
              onChange={e => this.setState({ SmallBox1Text: e.target.value })}
            />
            <input type="submit" value="Save Changes" onClick={this.handleSubmit} />
          </div>
          <div className={classes.smallBox}>
            <textarea
              value={this.state.SmallBox2Header}
              onChange={e => this.setState({ SmallBox2Header: e.target.value })}
            />
            <textarea
              value={this.state.SmallBox2Text}
              onChange={e => this.setState({ SmallBox2Text: e.target.value })}
            />
            <input type="submit" value="Save Changes" onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '70vh',
  },
  infoPage: {
    width: '80%',
    height: '90%',
    display: 'flex',
    flexFlow: 'row',
    background: 'white',
    borderRadius: '3px',
    padding: '5px',
  },
  infoPicture: {
    width: '50%',
    backgroundImage: "url('http://res.cloudinary.com/dhowdfbmx/image/upload/v1519022821/gksukdl1fn3um4g6ihzq.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  infoPageTextBody: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
  },
  infoPageHeader: {
    height: '20%',
    fontFamily: 'Hammersmith One',
    fontSize: '50px',
  },
  infoPageTextMain: {
    height: '80%',
    fontFamily: 'Hammersmith One',
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '20vh',
  },
  smallBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    fontFamily: 'Hammersmith one',
  },
}
function mapStateToProps(state) {
  return {
    user: state.userData,
  }
}
export default (withStyles(styles)(Info))
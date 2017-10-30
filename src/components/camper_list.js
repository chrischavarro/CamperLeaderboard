import React, { Component } from 'react';
import Camper from './camper';
import { connect } from 'react-redux';
import { getCampers30Days, getCampersAllTime, getCampers } from '../actions';
import { bindActionCreators } from 'redux';

class CamperList extends Component {
  constructor(props) {
    super(props)

    this.switchToAllTime = this.switchToAllTime.bind(this);
    this.switchTo30Days = this.switchTo30Days.bind(this);
  }

  componentDidMount() {
    this.props.getCampers('RECENT');
  }

  // componentDidMount() {
  //   this.props.getCampers30Days();
  // }

// switchToAllTime and switchTo30Days can probably be reduced to a single actions
// like getCampers(recent) and getCampers(alltime), with the action accepting a link
// with the passed value added to the end of the URL
  switchToAllTime() {
    this.props.getCampersAllTime();
  }

  switchTo30Days() {
    this.props.getCampers30Days();
  }

  renderCampers(camper, index) {
    // console.log(camper)
    const camperURL = `https://freecodecamp.com/${camper.username}`
    return (
      <tr key={camper.img}>
        <td>{index+1}</td>
        <td>
          <img src={camper.img} className="camperAvatar" />
          <a href={camperURL}>{camper.username}</a>
        </td>
        <td>{camper.recent}</td>
        <td>{camper.alltime}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th onClick={this.switchTo30Days}>Points in the past 30 days</th>
              <th onClick={this.switchToAllTime}>All time points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campers.map((camper, index) => this.renderCampers(camper, index))}
          </tbody>
        </table>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    campers: state.campers
  }
}

export default connect(mapStateToProps, { getCampers30Days, getCampersAllTime, getCampers })(CamperList)

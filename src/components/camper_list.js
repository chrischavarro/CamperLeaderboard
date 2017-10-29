import React, { Component } from 'react';
import Camper from './camper';
import { connect } from 'react-redux';
import { getCampers30Days, getCampersAllTime } from '../actions';

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers30Days();
  }

  renderCampers(camper, index) {
    console.log(camper)
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
              <th>Points in the past 30 days</th>
              <th onClick={this.props.getCampersAllTime}>All time points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campers30Days.map((camper, index) => this.renderCampers(camper, index))}
          </tbody>
        </table>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    campers30Days: state.campers30Days,
    campersAllTime: stte.campersAllTime
  }
}

export default connect(mapStateToProps, { getCampers30Days, getCampersAllTime })(CamperList)
// <Camper data={ this.props.camperInfo }/>

// {this.props.campers30Days.map((camper) => {
//   return <li>{camper.username}</li>
// })}
// {this.renderCampers()}

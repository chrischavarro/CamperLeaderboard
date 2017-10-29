import React, { Component } from 'react';
import Camper from './camper';
import { connect } from 'react-redux';
import { getCampers30Days } from '../actions';

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers30Days();
  }

  renderCampers(camper, index) {
    console.log(camper)
    return (
      <tr key={camper.img}>
        <td>{index+1}</td>
        <td>{camper.username}</td>
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
              <th>All time points</th>
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
  return { campers30Days: state.campers30Days }
}

export default connect(mapStateToProps, { getCampers30Days })(CamperList)
// <Camper data={ this.props.camperInfo }/>

// {this.props.campers30Days.map((camper) => {
//   return <li>{camper.username}</li>
// })}
// {this.renderCampers()}

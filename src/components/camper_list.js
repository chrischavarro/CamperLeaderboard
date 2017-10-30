import React, { Component } from 'react';
import Camper from '../containers/camper';
import { connect } from 'react-redux';
import { getCampers } from '../actions';

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers('RECENT');
  }

  renderCampers(camper, index) {
    const camperURL = `https://freecodecamp.com/${camper.username}`
    return (
        <Camper data={camper} index={index} key={index}/>
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
              <th onClick={() => this.props.getCampers('RECENT')}>Points in the past 30 days</th>
              <th onClick={() => this.props.getCampers('ALLTIME')}>All time points</th>
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

export default connect(mapStateToProps, { getCampers })(CamperList)

// onClick has to be passed a blank function before calling on external action

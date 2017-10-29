import React, { Component } from 'react';
import Camper from './camper';
import { connect } from 'react-redux';
import { getCampers30Days } from '../actions';

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers30Days();
  }

  renderCampers() {
    // console.log(this.props.campers30Days)
    const campers30Days = this.props.campers30Days;
    console.log(campers30Days);
    campers30Days.map((camper) => {
      return <li>{camper.username}</li>

    })
  }

  render() {
    // console.log(this.props.campers30Days)
    if (!this.props.campers30Days) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <ul>
        {this.props.campers30Days.map((camper) => {
          return <li>{camper.username}</li>
        })}
        {this.renderCampers()}
        afss

        </ul>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { campers30Days: state.campers30Days }
}

export default connect(mapStateToProps, { getCampers30Days })(CamperList)
// <Camper data={ this.props.camperInfo }/>
// {this.renderCampers()}
// {this.props.campers30Days.map(this.renderCampers)}

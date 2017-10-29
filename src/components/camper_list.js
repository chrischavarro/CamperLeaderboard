import React, { Component } from 'react';
import Camper from './camper';
import { connect } from 'react-redux';
import { getCampers30Days } from '../actions';

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers30Days();
  }

  renderCampers(camper) {
    console.log(camper)
    return <li>{camper.username}</li>;
    const campers30Days = this.props.campers30Days;
  }

  render() {
    // console.log(this.props.campers30Days)
    if (!this.props.campers30Days) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <ol>
        {this.props.campers30Days.map((camper) => this.renderCampers(camper))}
        </ol>
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
// {this.props.campers30Days.map((camper) => this.renderCampers)}

// {this.props.campers30Days.map((camper) => {
//   return <li>{camper.username}</li>
// })}
// {this.renderCampers()}

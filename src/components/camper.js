import React, { Component } from 'react'
import { connect } from 'react-redux';

class Camper extends Component {

  renderCampers() {
    console.log('gu')
    // console.log(data[0])
  }

  render() {
    return (
      <div>
        {this.renderCampers()}
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { campers: state.campers };
}

export default connect(mapStateToProps)(Camper);

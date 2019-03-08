import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addSmurfs } from "../../actions/index";

export class SmurfList extends Component {
  render() {
    return <div>hello</div>;
  }
}

function mapStateToProps(state) {
  return {
    ...state
    // smurfs: state.stateOfSmurfs.smurfs
  };
}

export default connect(
  mapStateToProps,
  { addSmurfs }
)(SmurfList);

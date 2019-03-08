import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addSmurfs } from "../../actions/index";

import Smurf from "./Smurf";

const StyledSmurfList = styled.ul``;

export class SmurfList extends Component {
  componentDidMount() {
    this.props.addSmurfs();
  }
  render() {
    return (
      <StyledSmurfList>
        {this.props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </StyledSmurfList>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfReducer.smurfs
  };
}

export default connect(
  mapStateToProps,
  { addSmurfs }
)(SmurfList);

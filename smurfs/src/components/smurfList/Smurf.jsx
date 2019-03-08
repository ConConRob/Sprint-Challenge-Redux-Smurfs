import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteSmurf } from "../../actions/index";

const StyledSmurf = styled.li``;

export function Smurf({ smurf, deleteSmurf }) {
  return (
    <StyledSmurf>
      {smurf.name}
      <button onClick={() => deleteSmurf(smurf.id)}>delete</button>
    </StyledSmurf>
  );
}

export default connect(
  () => {},
  { deleteSmurf }
)(Smurf);

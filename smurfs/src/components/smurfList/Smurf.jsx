import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteSmurf, setUpdatingSmurf } from "../../actions/index";

const StyledSmurf = styled.li``;

export function Smurf({ smurf, deleteSmurf, setUpdatingSmurf }) {
  return (
    <StyledSmurf>
      <span>{smurf.name} </span>
      <span>{smurf.age} </span>
      <span>{smurf.height} </span>
      <button onClick={() => deleteSmurf(smurf.id)}> delete </button>
      <button
        onClick={() =>
          setUpdatingSmurf(smurf.id, smurf.name, smurf.age, smurf.height)
        }
      >
        update
      </button>
    </StyledSmurf>
  );
}

export default connect(
  () => {},
  { deleteSmurf, setUpdatingSmurf }
)(Smurf);

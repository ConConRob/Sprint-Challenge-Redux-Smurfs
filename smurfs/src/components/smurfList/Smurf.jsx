import React from "react";
import styled from "styled-components";

const StyledSmurf = styled.li``;

export default function Smurf({ smurf }) {
  return <StyledSmurf>{smurf.name}</StyledSmurf>;
}

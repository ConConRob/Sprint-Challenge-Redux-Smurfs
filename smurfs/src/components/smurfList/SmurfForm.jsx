import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

import { addSmurf } from "../../actions/index";

const StyledSmurfForm = styled.form``;

const SmurfForm = props => {
  console.log(props.nameInput);
  function handleSubmit(event) {
    event.preventDefault();
    props.addSmurf(props.nameInput, props.ageInput, props.heightInput);
  }
  return (
    <StyledSmurfForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <Field name="age" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <Field name="height" component="input" type="text" />
      </div>
      <button type="submit">Add Smurf</button>
    </StyledSmurfForm>
  );
};

function mapStateToProps(state) {
  if (state.form.createSmurf && state.form.createSmurf.values) {
    return {
      nameInput: state.form.createSmurf.values.name,
      ageInput: state.form.createSmurf.values.age,
      heightInput: state.form.createSmurf.values.height
    };
  }
}

const ConnectedForm = connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);

export default reduxForm({ form: "createSmurf" })(ConnectedForm);
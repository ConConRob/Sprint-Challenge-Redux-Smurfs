import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

import { addSmurf, updatingSmurf } from "../../actions/index";

const StyledSmurfForm = styled.form``;

const SmurfForm = props => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.editId);
    if (props.editId) {
      props.updatingSmurf(
        props.editId,
        props.nameInput,
        props.ageInput,
        props.heightInput
      );
    } else {
      props.addSmurf(props.nameInput, props.ageInput, props.heightInput);
    }
  }
  const doing = !!props.editId ? "Edit" : "Add";
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
      <button type="submit">{doing} Smurf</button>
    </StyledSmurfForm>
  );
};

function mapStateToProps(state) {
  if (state.form.createSmurf && state.form.createSmurf.values) {
    return {
      nameInput: state.form.createSmurf.values.name,
      ageInput: state.form.createSmurf.values.age,
      heightInput: state.form.createSmurf.values.height,
      editId: state.form.createSmurf.editID
    };
  }
}

const ConnectedForm = connect(
  mapStateToProps,
  { addSmurf, updatingSmurf }
)(SmurfForm);

export default reduxForm({ form: "createSmurf" })(ConnectedForm);

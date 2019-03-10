import axios from "axios";
const url = "http://localhost:3333/smurfs";
// Action Types
export const CREATING_SMURF = "CREATING_SMURF";
export const SUCCESS_CREATING_SMURF = "SUCCESS_CREATING_SMURF";
export const FAIL_CREATING_SMURF = "FAIL_CREATING_SMURF";
export const READING_SMURFS = "READING_SMURFS";
export const SUCCESS_READING_SMURFS = "SUCCESS_READING_SMURFS";
export const FAIL_READING_SMURFS = "FAIL_READING_SMURFS";
export const DELETEING_SMURF = "DELETEING_SMURF";
export const SUCCESS_DELETEING_SMURF = "SUCCESS_DELETEING_SMURF";
export const FAIL_DELETEING_SMURF = "FAIL_DELETEING_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const SUCCESS_UPDATING_SMURF = "SUCCESS_UPDATING_SMURF";
export const FAIL_UPDATING_SMURF = "FAIL_UPDATING_SMURF";
export const SET_UPDATING_SMURF = "SET_UPDATING_SMURF";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const addSmurf = (name, age, height) => dispatch => {
  dispatch({ type: CREATING_SMURF });
  axios
    .post(url, { name, age, height })
    .then(res => dispatch({ type: SUCCESS_CREATING_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: FAIL_CREATING_SMURF, payload: err }));
};

export const addSmurfs = () => dispatch => {
  dispatch({ type: READING_SMURFS });
  axios
    .get(url)
    .then(res => dispatch({ type: SUCCESS_READING_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: FAIL_READING_SMURFS, payload: err }));
};
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETEING_SMURF });
  axios
    .delete(`${url}/${id}`)
    .then(res => dispatch({ type: SUCCESS_DELETEING_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: FAIL_DELETEING_SMURF, payload: err }));
};

export const updatingSmurf = (id, name, age, height) => dispatch => {
  dispatch({ type: UPDATING_SMURF });
  axios
    .put(`${url}/${id}`, { name, age, height })
    .then(res => dispatch({ type: SUCCESS_UPDATING_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: FAIL_UPDATING_SMURF, payload: err }));
};

export function setUpdatingSmurf(id,name,age,height){
  return {
    type: SET_UPDATING_SMURF, payload:{id,name,age,height}
  }
}
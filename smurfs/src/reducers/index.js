import { reducer as formReducer } from "redux-form";

import {
  CREATING_SMURF,
  SUCCESS_CREATING_SMURF,
  FAIL_CREATING_SMURF,
  READING_SMURFS,
  SUCCESS_READING_SMURFS,
  FAIL_READING_SMURFS,
  DELETEING_SMURF,
  SUCCESS_DELETEING_SMURF,
  FAIL_DELETEING_SMURF,
  UPDATING_SMURF,
  SUCCESS_UPDATING_SMURF,
  FAIL_UPDATING_SMURF,
  SET_UPDATING_SMURF,
} from "../actions/index";

const initState = {
  smurfs: [],
  readingSmurfs: false,
  creatingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export function smurfReducer(stateOfSmurfs = initState, action) {
  switch (action.type) {
    case CREATING_SMURF:
      return { ...stateOfSmurfs, creatingSmurf: true, error: null };
    case SUCCESS_CREATING_SMURF:
      return { ...stateOfSmurfs, creatingSmurf: false, smurfs: action.payload };
    case FAIL_CREATING_SMURF:
      return { ...stateOfSmurfs, creatingSmurf: false, error: action.payload };
    case READING_SMURFS:
      return { ...stateOfSmurfs, readingSmurfs: true, error: null };
    case SUCCESS_READING_SMURFS:
      return { ...stateOfSmurfs, readingSmurfs: false, smurfs: action.payload };
    case FAIL_READING_SMURFS:
      return { ...stateOfSmurfs, readingSmurfs: false, error: action.payload };
    case DELETEING_SMURF:
      return {...stateOfSmurfs, deletingSmurf: true, error:null};
    case SUCCESS_DELETEING_SMURF:
      return {...stateOfSmurfs, deletingSmurf: false, smurfs: action.payload};
    case FAIL_DELETEING_SMURF:
      return {...stateOfSmurfs, deletingSmurf: false, error: action.payload};
    case UPDATING_SMURF:
      return {...stateOfSmurfs, updatingSmurf:true, error: null};
    case SUCCESS_UPDATING_SMURF:
      return {...stateOfSmurfs, updatingSmurf: false, smurfs: action.payload};
    case FAIL_UPDATING_SMURF:
      return {...stateOfSmurfs, updatingSmurf: false, error: action.payload}
    default:
      return stateOfSmurfs;
  }
}

export const reducers = {
  smurfReducer,
  form: formReducer.plugin({
    createSmurf: (state, action) => {
      switch (action.type) {
        case SET_UPDATING_SMURF:
          return {
            ...state,
            editID: action.payload.id,
            values: {
              name: action.payload.name,
              age: action.payload.age,
              height: action.payload.height
            }
          };
        case SUCCESS_UPDATING_SMURF:
          return {
            ...state,
            editID: null,
            values: {
              name: "",
              age: "",
              height: ""
            }
          };
        case FAIL_UPDATING_SMURF:
          return {
            ...state,
            editID: null,
            values: {
              name: "",
              age: "",
              height: ""
            }
          };
        case SUCCESS_CREATING_SMURF:
          return {
            ...state,
            editID: null,
            values: {
              name: "",
              age: "",
              height: ""
            }
          };
        case FAIL_CREATING_SMURF:
          return {
            ...state,
            editID: null,
            values: {
              name: "",
              age: "",
              height: ""
            }
          };
        default:
          return state;
      }
    }
  })
};
export default reducers
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

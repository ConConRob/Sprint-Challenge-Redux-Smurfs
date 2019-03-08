import {
  CREATING_SMURF,
  SUCCESS_CREATING_SMURF,
  FAIL_CREATING_SMURF,
  READING_SMURFS,
  SUCCESS_READING_SMURFS,
  FAIL_READING_SMURFS,
  DELETEING_SMURF,
  SUCCESS_DELETEING_SMURF,
  FAIL_DELETEING_SMURF
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
    default:
      return stateOfSmurfs;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

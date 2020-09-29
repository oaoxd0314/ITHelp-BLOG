// redux/reducer/Note_reducer.js

import {Constants} from '../Constants'

const initialState = {
  Notes: [],
  article:[],
  experience: [],
  skill: [],
};


export default function Note(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_NOTE:
      return {
        // get data from your db
      };
    case Constants.PUT_NOTE:
      return {
        // update Notes
      };
    default:
      return state;
  }
}

// redux/reducer/Note_reducer.js
import data from "../../data/data"

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
        ...state,
        article:action.article,
        skill: action.skill,
        experience:action.experience,
        Notes: action.Notes,
      };
    case Constants.PUT_NOTE:
      return {
        // update Notes
      };
    default:
      return state;
  }
}

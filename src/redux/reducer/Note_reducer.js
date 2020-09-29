import {Constants} from '../Constants'

const initialState = {
  Notes: [],
  article:[]
};


export default function Note(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_NOTE:
      return {};
    case Constants.PUT_NOTE:
      return {};
    default:
      return state;
  }
}

import Constants from "../Constants";

const noteActions = {
  GET_NOTE,
  PUT_NOTE,
};

function GET_NOTE() {
  return { type: Constants.GET_NOTE };
}

function PUT_NOTE(article) {
  return {
    type: Constants.PUT_NOTE,
    note: article,
  };
}

export default noteActions;

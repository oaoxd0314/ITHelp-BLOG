import data from "../../data/data";
import { Constants } from "../Constants";

export function fetchPageData() {
  return (dispatch) => {
    return getData()
      .then((json) => dispatch(GET_NOTE(json)))
      .catch((err) => {
        console.log(err);
      });
  };
}

function getData() {
  return new Promise((resolve, reject) => {
    const state = data ? data : null;
    if (state == null) {
      reject(console.log("fetch fail"));
    }
    resolve(state);
  });
}

function GET_NOTE(json) {
  return {
    type: Constants.GET_NOTE,
    Notes: json.Notes,
    article: json.article,
    experience: json.experience,
    skill: json.skill,
  };
}

function PUT_NOTE(article) {
  return {
    type: Constants.PUT_NOTE,
    note: article,
  };
}

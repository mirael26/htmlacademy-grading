import axios from "axios";

import { ApiUrl } from "consts";
import { ActionCreator } from "./action";
import { TAppDispatch } from "./store";

const URL = 'http://localhost:3001';

export const loadQuests = () => {
  return (dispatch: TAppDispatch) => {
    axios
      .get(`${URL}${ApiUrl.Quests}`)
      .then(response => {
        dispatch(ActionCreator.loadQuests(response.data));
      })
      .then(() => dispatch(ActionCreator.getGenres()))
      .catch(error => {
        console.error(error);
      });
  };
}
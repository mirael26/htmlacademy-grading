import axios from "axios";

import { ApiUrl } from "consts";
import { ActionCreator } from "./action";
import { adaptQuestToClient } from "./adapter";
import { TAppDispatch } from "./store";

const URL = 'http://localhost:3001';

export const loadQuests = () => {
  return (dispatch: TAppDispatch) => {
    axios
      .get(`${URL}${ApiUrl.Quests}`)
      .then(response => response.data.map(adaptQuestToClient))
      .then(quests => dispatch(ActionCreator.loadQuests(quests)))
      .then(() => dispatch(ActionCreator.getGenres()))
      .catch(error => {
        console.error(error);
      });
  };
}

export const loadCurrentQuest = (id: string | number) => {
  return (dispatch: TAppDispatch) => {
    axios
      .get(`${URL}${ApiUrl.Quests}/${id}`)
      .then(response => adaptQuestToClient(response.data))
      .then(quest => dispatch(ActionCreator.loadCurrentQuest(quest)))
      .catch(error => {
        console.error(error);
      });
  };
}
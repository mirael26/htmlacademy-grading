import axios from "axios";
import { customHistory as history } from "components/app/app";

import { ApiUrl, AppUrl } from "consts";
import { IUserInfo } from "types";
import { ActionCreator } from "./action";
import { adaptQuestToClient } from "./adapter";
import { TAppDispatch } from "./store";

const URL = 'http://localhost:3001';
const SUCCESS_ORDER_MESSAGE = 'Заявка успешно отправлена';

const UrlStatus = {
  NotFound: 404,
} as const;

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
        if (error.response.status === UrlStatus.NotFound) {
          history.push(AppUrl.NotFound);
        }
        console.error(error);
      });
  };
}

export const postOrder = (orderInfo: IUserInfo) => {
  return () => {
    axios
      .post(`${URL}${ApiUrl.Order}`, orderInfo)
      .then(() => {
        alert(SUCCESS_ORDER_MESSAGE);
        history.push(AppUrl.Home);
      }
      )
      .catch(error => {
        console.error(error);
      });
  };
}
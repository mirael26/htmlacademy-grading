// data

import { ActionType } from "store/action";
import { Genre, Level } from "consts";

export type TGenre = keyof typeof Genre;
export type TLevel = keyof typeof Level;
export type TDuration = 60 | 90 | 120;

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: TGenre,
  level: TLevel,
  peopleCount: Array<number>,
  duration: TDuration,
}

export interface IQuestFromServer {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: typeof Genre[keyof typeof Genre],
  level: typeof Level[keyof typeof Level],
  peopleCount: Array<number>,
  duration: TDuration,
}

export type TQuests = Array<IQuest>;

export interface IUserInfo {
  name: string,
  phone: string,
  peopleCount: number | null,
  isLegal: boolean,
}

// reducers

export interface IDataReducer {
  quests: TQuests | null,
  currentQuest: IQuest | null,
  genres: Array<TGenre> | null,
}

// actions

export interface ILoadQuests {
  type: typeof ActionType.LoadQuests,
  payload: TQuests,
}

export interface ILoadCurrentQuest {
  type: typeof ActionType.LoadCurrentQuest,
  payload: IQuest,
}

export interface IGetGenres {
  type: typeof ActionType.GetGenres,
}

export type IDataAction = ILoadQuests | ILoadCurrentQuest | IGetGenres;
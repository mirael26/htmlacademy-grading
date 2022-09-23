// data

import { ActionType } from "store/action";
import { Genre, Level } from "consts";

export type TGenre = typeof Genre[keyof typeof Genre];
export type TLevel = typeof Level[keyof typeof Level];

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: TGenre,
  level: TLevel,
  peopleCount: Array<number>,
  duration: number,
}

export type TQuests = Array<IQuest>;

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
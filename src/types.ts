// data

import { ActionType } from "components/store/action";
import { Genre as GenreList, Level as LevelList } from "consts";

export type Genre = typeof GenreList[keyof typeof GenreList];
export type Level = typeof LevelList[keyof typeof LevelList];

export interface Quest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: Genre,
  level: Level,
  peopleCount: Array<number>,
  duration: number,
}

export type Quests = Array<Quest>;

// reducers

export interface DataReducer {
  quests: Quests | null,
  currentQuest: Quest | null,
  genres: Array<Genre> | null,
}

// actions

export interface LoadQuests {
  type: typeof ActionType.LoadQuests,
  payload: Quests,
}

export interface LoadCurrentQuest {
  type: typeof ActionType.LoadCurrentQuest,
  payload: Quest,
}

export interface GetGenres {
  type: typeof ActionType.GetGenres,
}

export type DataAction = LoadQuests | LoadCurrentQuest | GetGenres;
export type Action = DataAction;
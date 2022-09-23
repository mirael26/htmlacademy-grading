import { DataAction, DataReducer } from "types";
import { ActionType } from "../action";

const initialState: DataReducer = {
  quests: null,
  currentQuest: null,
  genres: null,
}

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case ActionType.LoadQuests:
      return {...state, quests: action.payload};
    case ActionType.LoadCurrentQuest:
      return {...state, currentQuest: action.payload};
    case ActionType.GetGenres:
      const genres = state.quests?.map((quests) => quests.type) || null;
      const uniqueGenres = genres ? Array.from(new Set(genres)) : null;
      return {...state, genres: uniqueGenres};
    default:
      return state;
  }
};

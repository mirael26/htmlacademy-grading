import { GetGenres, LoadCurrentQuest, LoadQuests, Quest, Quests } from "types";

export const ActionType = {
  LoadQuests: 'quests/loadQuests',
  LoadCurrentQuest: 'quests/loadCurrentQuest',
  GetGenres: 'quests/getGenres',
} as const;

export const ActionCreator = {
  loadQuests: (quests: Quests): LoadQuests => ({
    type: ActionType.LoadQuests,
    payload: quests,
  }),
  loadCurrentQuest: (quest: Quest): LoadCurrentQuest => ({
    type: ActionType.LoadCurrentQuest,
    payload: quest,
  }),
  getGenres: (): GetGenres => ({
    type: ActionType.GetGenres,
  }),
};
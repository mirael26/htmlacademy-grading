import { IGetGenres, ILoadCurrentQuest, ILoadQuests, IQuest, TQuests } from "types";

export const ActionType = {
  LoadQuests: 'quests/loadQuests',
  LoadCurrentQuest: 'quests/loadCurrentQuest',
  GetGenres: 'quests/getGenres',
} as const;

export const ActionCreator = {
  loadQuests: (quests: TQuests): ILoadQuests => ({
    type: ActionType.LoadQuests,
    payload: quests,
  }),
  loadCurrentQuest: (quest: IQuest): ILoadCurrentQuest => ({
    type: ActionType.LoadCurrentQuest,
    payload: quest,
  }),
  getGenres: (): IGetGenres => ({
    type: ActionType.GetGenres,
  }),
};
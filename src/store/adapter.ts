import { Genre, Level } from "consts";
import { IQuestFromServer } from "types";
import { findKeyByValue } from "utils";

const adaptGenre = (genre: typeof Genre[keyof typeof Genre]) => {
  return findKeyByValue(genre, Genre);
};

const adaptLevel = (level: typeof Level[keyof typeof Level]) => {
  return findKeyByValue(level, Level);
}

export const adaptQuestToClient = (quest: IQuestFromServer) => {
  const adaptedQuest = {...quest,
      type: adaptGenre(quest.type),
      level: adaptLevel(quest.level),
  };

  return adaptedQuest;
};

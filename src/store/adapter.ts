import { Genre, Level } from "consts";
import { IQuest, IQuestFromServer, TGenre, TLevel } from "types";
import { findKeyByValue } from "utils";

const adaptGenre = (genre: typeof Genre[keyof typeof Genre]): TGenre => {
  return findKeyByValue(genre, Genre) as TGenre;
};

const adaptLevel = (level: typeof Level[keyof typeof Level]): TLevel => {
  return findKeyByValue(level, Level) as TLevel;
}

export const adaptQuestToClient = (quest: IQuestFromServer): IQuest => {
  const adaptedQuest = {...quest,
      type: adaptGenre(quest.type),
      level: adaptLevel(quest.level),
  };

  return adaptedQuest;
};

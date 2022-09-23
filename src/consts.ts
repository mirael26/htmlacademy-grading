// data

export const Genre = {
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
} as const;

export const GenreTitle = {
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-fi',
};

export const Level = {
  Hard: 'hard',
  Medium: 'medium',
  Easy: 'easy',
} as const;

export const LevelTitle = {
  Hard: 'сложный',
  Medium: 'средний',
  Easy: 'легкий',
}

// url

export const AppUrl = {
  Home: '/',
  Quest: '/quest',
  Contacts: '/contacts',
} as const;

export const ApiUrl = {
  Quests: '/quests',
  Order: '/orders',
} as const;
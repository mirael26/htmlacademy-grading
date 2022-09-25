// data

export const Genre = {
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
} as const;

export const Level = {
  Hard: 'hard',
  Medium: 'medium',
  Easy: 'easy',
} as const;

export const LevelTitle = {
  Hard: 'сложный',
  Medium: 'средний',
  Easy: 'легкий',
} as const;

export const RegExpTest = {
  Name: /^[A-Za-zА-Яа-я0-9 .,@-_]+$/,
  Phone: /^((\+7|7|8)+([0-9]){10})$/,
  PeopleCount: /^[0-9]+$/,
};

// url

export const AppUrl = {
  Home: '/',
  Quest: '/detailed-quest',
  Contacts: '/contacts',
  NotFound: '/404',
} as const;

export const ApiUrl = {
  Quests: '/quests',
  Order: '/orders',
} as const;
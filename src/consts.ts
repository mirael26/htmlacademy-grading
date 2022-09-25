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
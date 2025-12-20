export const SPREAD_TYPES = {
  THREE_CARD: 'three-card',
  CELTIC_CROSS: 'celtic-cross'
};

export const SPREAD_CARD_COUNTS = {
  [SPREAD_TYPES.THREE_CARD]: 3,
  [SPREAD_TYPES.CELTIC_CROSS]: 10
};

export const CARD_POSITIONS = {
  THREE_CARD: [
    'past',
    'present',
    'future'
  ],
  CELTIC_CROSS: [
    'the heart of the matter',
    'what\'s Crossing You',
    'the root cause',
    'the recent past',
    'possible outcome',
    'immediate future',
    'you/the querent',
    'the Querent\'s environment',
    'hopes and fears',
    'the outcome'
  ]
};

export const ROUTES = {
  HOME: '/',
  ARCHIVE: '/archive',
  ARCHIVE_ITEM: '/archive/:id'
};

export const API_ENDPOINTS = {
  CARDS: '/api/cards',
  CARDS_RANDOM: (count) => `/api/reading/${count}`,
  READINGS: '/api/reading/s',
  READING_BY_ID: (id) => `/api/reading/s/${id}`
};

export const ERROR_MESSAGES = {
  FETCH_READINGS_FAILED: 'Failed to load readings. Please try again.',
  DELETE_READING_FAILED: 'Failed to delete reading. Please try again.',
  FETCH_CARDS_FAILED: 'Error fetching cards',
  SAVE_READING_FAILED: 'Error saving reading',
  READING_NOT_FOUND: 'Reading not found.'
};

export const UI_TEXT = {
  NO_READINGS: 'No readings archived yet.',
  LOADING: 'Loading readings...',
  SELECT_SPREAD: 'Select A Spread:',
  THREE_CARD_LABEL: 'Three-Card Spread',
  CELTIC_CROSS_LABEL: 'Celtic Cross Spread',
  SAVE_SPREAD: 'Save This Spread',
  VIEW_BUTTON: 'View',
  DELETE_BUTTON: 'Delete'
};

const API_BASE_URL = '/api';

export const readingAPI = {
  getRandomCards: async (count) => {
    const response = await fetch(`${API_BASE_URL}/reading/${count}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${count} cards`);
    }
    return response.json();
  },

  getAllReadings: async () => {
    const response = await fetch(`${API_BASE_URL}/reading/s`);
    if (!response.ok) {
      throw new Error('Failed to fetch readings');
    }
    return response.json();
  },

  getReadingById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/reading/s/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch reading ${id}`);
    }
    return response.json();
  },

  createReading: async (reading) => {
    const response = await fetch(`${API_BASE_URL}/reading/s`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reading),
    });
    if (!response.ok) {
      throw new Error('Failed to create reading');
    }
    return response.json();
  },

  deleteReading: async (id) => {
    const response = await fetch(`${API_BASE_URL}/reading/s/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete reading ${id}`);
    }
    return response.status === 204 ? null : response.json();
  },
};

export const cardAPI = {
  getAllCards: async () => {
    const response = await fetch(`${API_BASE_URL}/cards`);
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }
    return response.json();
  },

  getCardById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/cards/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch card ${id}`);
    }
    return response.json();
  },
};

import { http, HttpResponse } from 'msw';

const mockCards = [
  { id: 1, type: 'major', nameShort: 'ar00', name: 'The Fool', meaningUp: 'New beginnings, innocence, spontaneity', meaningRev: 'Recklessness, taken advantage of, inconsideration' },
  { id: 2, type: 'major', nameShort: 'ar01', name: 'The Magician', meaningUp: 'Manifestation, resourcefulness, power', meaningRev: 'Manipulation, poor planning, untapped talents' },
  { id: 3, type: 'major', nameShort: 'ar02', name: 'The High Priestess', meaningUp: 'Intuition, sacred knowledge, divine feminine', meaningRev: 'Secrets, disconnected from intuition, withdrawal' },
  { id: 4, type: 'major', nameShort: 'ar03', name: 'The Empress', meaningUp: 'Femininity, beauty, nature', meaningRev: 'Creative block, dependence on others' },
  { id: 5, type: 'major', nameShort: 'ar04', name: 'The Emperor', meaningUp: 'Authority, establishment, structure', meaningRev: 'Domination, excessive control, lack of discipline' },
  { id: 6, type: 'major', nameShort: 'ar05', name: 'The Hierophant', meaningUp: 'Spiritual wisdom, religious beliefs', meaningRev: 'Personal beliefs, freedom, challenging the status quo' },
  { id: 7, type: 'major', nameShort: 'ar06', name: 'The Lovers', meaningUp: 'Love, harmony, relationships', meaningRev: 'Self-love, disharmony, imbalance' },
  { id: 8, type: 'major', nameShort: 'ar07', name: 'The Chariot', meaningUp: 'Control, willpower, success', meaningRev: 'Lack of control, lack of direction' },
  { id: 9, type: 'major', nameShort: 'ar08', name: 'Strength', meaningUp: 'Strength, courage, persuasion', meaningRev: 'Inner strength, self-doubt, low energy' },
  { id: 10, type: 'major', nameShort: 'ar09', name: 'The Hermit', meaningUp: 'Soul searching, introspection', meaningRev: 'Isolation, loneliness, withdrawal' }
];

let mockReadings = [
  {
    id: 1,
    cardReadings: [
      {
        position: 0,
        reversed: false,
        card: mockCards[0]
      },
      {
        position: 1,
        reversed: true,
        card: mockCards[1]
      },
      {
        position: 2,
        reversed: false,
        card: mockCards[2]
      }
    ]
  }
];

export const resetMockReadings = () => {
  mockReadings = [
    {
      id: 1,
      cardReadings: [
        {
          position: 0,
          reversed: false,
          card: mockCards[0]
        },
        {
          position: 1,
          reversed: true,
          card: mockCards[1]
        },
        {
          position: 2,
          reversed: false,
          card: mockCards[2]
        }
      ]
    }
  ];
};

export const handlers = [
  // Get all cards
  http.get('/api/cards', () => {
    return HttpResponse.json(mockCards);
  }),

  // Get random cards for reading
  http.get('/api/reading/:count', ({ params }) => {
    const count = parseInt(params.count);
    const randomCards = mockCards.slice(0, count);
    return HttpResponse.json(randomCards);
  }),

  // Get all readings
  http.get('/api/reading/s', () => {
    return HttpResponse.json(mockReadings);
  }),

  // Get reading by ID
  http.get('/api/reading/s/:id', ({ params }) => {
    const reading = mockReadings.find(r => r.id === parseInt(params.id));
    if (reading) {
      return HttpResponse.json(reading);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  // Create new reading
  http.post('/api/reading/s', async ({ request }) => {
    const newReading = await request.json();
    const reading = {
      id: mockReadings.length + 1,
      ...newReading
    };
    mockReadings.push(reading);
    return HttpResponse.json(reading, { status: 201 });
  }),

  // Delete reading
  http.delete('/api/reading/s/:id', ({ params }) => {
    const index = mockReadings.findIndex(r => r.id === parseInt(params.id));
    if (index !== -1) {
      mockReadings.splice(index, 1);
      return new HttpResponse(null, { status: 204 });
    }
    return new HttpResponse(null, { status: 404 });
  })
];

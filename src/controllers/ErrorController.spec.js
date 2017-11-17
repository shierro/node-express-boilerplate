const request = require('supertest');
const app = require('../index');

describe('Error Controller', () => {
  it(
    'should return 404',
    () => request(app)
      .get('/api/that-did-not-exist')
      .expect(404)
  );
});

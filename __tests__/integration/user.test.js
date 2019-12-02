import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Thyago Araujo',
        email: 'thyago@rocketseat.com.br',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});

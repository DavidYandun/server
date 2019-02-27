const knex = require('../db/knex');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const fixtures = require('./fixtures');

describe('CRUD Stickers', () => {
    before((done) => {
        //run migrations
        knex.migrate.latest()
            .then(() => {
                //run seeds
                return knex.seed.run();
            }).then(() => done());

    });
    it('List all Records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', 'aplication/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                //expect(response.body).to.deep.equal(fixtures.stickers);
                done();
            });
    });

    it('Show a record by id', (done) => {
        request(app)
            .get('/api/v1/stickers/73')
            .set('Accept', 'aplication/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                //expect(response.body).to.deep.equal(fixtures.stickers[0]);
                done();
            });
    });
    it('Create a record',(done)=>{
        request(app)
        .post('/api/v1/stickers/73')
        .send(fixtures.sticker)
        .set('Accept', 'aplication/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).to.be.a('object');
            fixtures.sticker.id=response.body.id;
            //expect(response.body).to.deep.equal(fixtures.stickers[0]);
            done();
        });
});

    
})
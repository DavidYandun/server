const knex = require('./knex');

module.exports = {
    getAll(query) {
        const knexQuery = knex('persons');
        if (query.name) {
            knexQuery.where('name', 'like', `%${query.name}%`);
        }
        if (query.lastname) {

            knexQuery.where('lastname', 'like', `%${query.lastname}%`);
        }
        return knexQuery;
    },
    getOne(personid) {
        return knex('persons').where('personid', personid).first();
    },
    create(persons) {
        return knex('persons').insert(persons, '*');
    },
    update(personid, person) {
        return knex('persons').where('personid', personid).update(person, '*');
    },
    delete(personid) {
        return knex('persons').where('personid', personid).del();
    }
}
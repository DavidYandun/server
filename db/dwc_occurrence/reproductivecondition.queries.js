const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_reproductive_condition');
        return knexQuery;
    },
    getOne(reproductivecondition) {
        return knex('em_tab_reproductive_condition').where('reproductivecondition', reproductivecondition).first();
    },
    create(reproductivecondition) {
        return knex('em_tab_reproductive_condition').insert(reproductivecondition, '*');
    },
    update(reproductivecondition, reproductiveconditions) {
        return knex('em_tab_reproductive_condition').where('reproductivecondition', reproductivecondition).update(reproductiveconditions, '*');
    },
    delete(reproductivecondition) {
        return knex('em_tab_reproductive_condition').where('reproductivecondition', reproductivecondition).del();
    }
}
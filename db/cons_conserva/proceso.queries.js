const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_cons_proceso');
        return knexQuery;
    },
    getOne(procesoid) {
        return knex('em_tab_cons_proceso').where('procesoid', procesoid).first();
    },
    create(organism) {
        return knex('em_tab_cons_proceso').insert(organism, '*');
    },
    update(procesoid, mutlimedias) {
        return knex('em_tab_cons_proceso').where('procesoid', procesoid).update(mutlimedias, '*');
    },
    delete(procesoid) {
        return knex('em_tab_cons_proceso').where('procesoid', procesoid).del();
    }
}
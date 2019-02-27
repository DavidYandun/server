const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_cons_conserva');
        return knexQuery;
    },
    getOne(conservaid) {
        return knex('em_tab_cons_conserva').where('conservaid', conservaid).first();
    },
    create(organism) {
        return knex('em_tab_cons_conserva').insert(organism, '*');
    },
    update(conservaid, mutlimedias) {
        return knex('em_tab_cons_conserva').where('conservaid', conservaid).update(mutlimedias, '*');
    },
    delete(conservaid) {
        return knex('em_tab_cons_conserva').where('conservaid', conservaid).del();
    }
}
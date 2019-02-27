const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_mul_multimedia');
        return knexQuery;
    },
    getOne(multimediaid) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).first();
    },
    create(organism) {
        return knex('em_tab_mul_multimedia').insert(organism, '*');
    },
    update(multimediaid, mutlimedias) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).update(mutlimedias, '*');
    },
    delete(multimediaid) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).del();
    }
}
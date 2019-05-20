const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_mul_multimedia');
        return knexQuery;
    },
    getAllId(identificationid) {
        return knex('em_tab_mul_multimedia').where('identificationid', identificationid);
    },
    getOne(multimediaid) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_mul_multimedia').where('identificationid', identificationid).first();
    },
    getOnePrincipal(identificationid) {
        return knex('em_tab_mul_multimedia').where('identificationid', identificationid).andWhere('principal', true).first();
    },
    getMax() {
        return knex('em_tab_mul_multimedia').max('multimediaid as multimediaid').first();
    },
    create(multimedia) {
        return knex('em_tab_mul_multimedia').insert(multimedia, '*');
    },
    update(multimediaid, mutlimedias) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).update(mutlimedias, '*');
    },
    delete(multimediaid) {
        return knex('em_tab_mul_multimedia').where('multimediaid', multimediaid).del();
    }
}
const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_class');
        return knexQuery;
    },
    getOne(classe) {
        return knex('em_tab_dwc_class').where('class', classe).first();
    },
    create(classe) {
        return knex('em_tab_dwc_class').insert(classe, '*');
    },
    update(classe, classs) {
        return knex('em_tab_dwc_class').where('class', classe).update(classs, '*');
    },
    delete(classe) {
        return knex('em_tab_dwc_class').where('class', classe).del();
    }
}
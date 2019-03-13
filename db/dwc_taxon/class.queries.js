const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_class');
        return knexQuery;
    },
    getFilter(phylum) {
        return knex('em_tab_dwc_class').where('phylum', phylum);
    },
    getOne(classs) {
        return knex('em_tab_dwc_class').where('class', classs).first();
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
const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_continent');
        return knexQuery;
    },
    getOne(continent) {
        return knex('em_tab_dwc_continent').where('continent', continent).first();
    },
    create(continent) {
        return knex('em_tab_dwc_continent').insert(continent, '*');
    },
    update(continent, continents) {
        return knex('em_tab_dwc_continent').where('continent', continent).update(continents, '*');
    },
    delete(continent) {
        return knex('em_tab_dwc_continent').where('continent', continent).del();
    }
}
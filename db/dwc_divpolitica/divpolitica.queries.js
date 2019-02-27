const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_divpolitica');
        return knexQuery;
    },
    getOne(divpoliticaid) {
        return knex('em_tab_dwc_divpolitica').where('divpoliticaid', divpoliticaid).first();
    },
    create(divpolitica) {
        return knex('em_tab_dwc_divpolitica').insert(divpolitica, '*');
    },
    update(divpoliticaid, mutlimedias) {
        return knex('em_tab_dwc_divpolitica').where('divpoliticaid', divpoliticaid).update(mutlimedias, '*');
    },
    delete(divpoliticaid) {
        return knex('em_tab_dwc_divpolitica').where('divpoliticaid', divpoliticaid).del();
    }
}
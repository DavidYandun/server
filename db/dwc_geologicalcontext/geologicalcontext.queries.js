const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_geologicalcontext');
        return knexQuery;
    },
    getOne(geologicalcontextid) {
        return knex('em_tab_dwc_geologicalcontext').where('geologicalcontextid', geologicalcontextid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_dwc_geologicalcontext').where('identificationid', identificationid).first();
    },
    create(geologicalcontext) {
        return knex('em_tab_dwc_geologicalcontext').insert(geologicalcontext, '*');
    },
    update(geologicalcontextid, geologicalcontexts) {
        return knex('em_tab_dwc_geologicalcontext').where('geologicalcontextid', geologicalcontextid).update(geologicalcontexts, '*');
    },
    delete(geologicalcontextid) {
        return knex('em_tab_dwc_geologicalcontext').where('geologicalcontextid', geologicalcontextid).del();
    }
}
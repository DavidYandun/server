const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_location');
        return knexQuery;
    },
    getOne(locationid) {
        return knex('em_tab_dwc_location').where('locationid', locationid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_dwc_location').where('identificationid', identificationid).first();
    },
    create(locationid) {
        return knex('em_tab_dwc_location').insert(locationid, '*');
    },
    update(locationid, locations) {
        return knex('em_tab_dwc_location').where('locationid', locationid).update(locations, '*');
    },
    delete(locationid) {
        return knex('em_tab_dwc_location').where('locationid', locationid).del();
    }
}
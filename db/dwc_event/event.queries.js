const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_event');
        return knexQuery;
    },
    getOne(eventid) {
        return knex('em_tab_dwc_event').where('eventid', eventid).first();
    },
    create(event) {
        return knex('em_tab_dwc_event').insert(event, '*');
    },
    update(eventid, events) {
        return knex('em_tab_dwc_event').where('eventid', eventid).update(events, '*');
    },
    delete(eventid) {
        return knex('em_tab_dwc_event').where('eventid', eventid).del();
    }
}
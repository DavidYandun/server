const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_identification');
        return knexQuery;
    },
    getOne(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).first();
    },
    create(identificationid) {
        return knex('em_tab_dwc_identification').insert(identificationid, '*');
    },
    update(identificationid, identifications) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).update(identifications, '*');
    },
    delete(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).del();
    },
    collection() {
        const knexQuery = knex('em_tab_dwc_identification')
            .leftJoin('em_tab_dwc_taxon', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_taxon.identificationid')
            .leftJoin('em_tab_dwc_event', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_event.identificationid')
            .leftJoin('em_tab_mul_multimedia', 'em_tab_dwc_identification.identificationid', 'em_tab_mul_multimedia.identificationid')
            .select('em_tab_dwc_identification.identificationid', 'em_tab_dwc_identification.verificationstatus', 'em_tab_dwc_identification.identifiedby',
                'em_tab_dwc_taxon.lineoid', 'taxonrank', 'em_tab_dwc_taxon.scientificname', 'em_tab_dwc_taxon.vernacularname',
                'em_tab_dwc_event.fieldnumber',
                'em_tab_mul_multimedia.typemedia', 'em_tab_mul_multimedia.name', 'em_tab_mul_multimedia.url');
                return knexQuery;
    }
}
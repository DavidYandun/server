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
    getCollection() {
        const knexQuery = knex('em_tab_dwc_identification')
            .leftJoin('em_tab_dwc_taxon', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_taxon.identificationid')
            .leftJoin('em_tab_dwc_event', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_event.identificationid')
            .leftJoin('em_tab_mul_multimedia', 'em_tab_dwc_identification.identificationid', 'em_tab_mul_multimedia.identificationid')
            .select('em_tab_dwc_identification.identificationid', 'verificationstatus', 'identifiedby',
                'lineoid', 'kingdom','phylum','class' ,'order','family','genus','specie','taxonrank', 'scientificname', 'vernacularname',
                'fieldnumber',
                'typemedia', 'name as medianame', 'url');
                

        return knexQuery;
    }
}
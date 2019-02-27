exports.up = function (knex, Promise) {
    /*return knex.schema.createTable('rols', (table) => {
        table.increments('rolid');
        table.text('name');
        table.text('description');
    });*/
};

exports.down = function (knex, Promise) {
    //return knex.schema.dropTable('rols');
};
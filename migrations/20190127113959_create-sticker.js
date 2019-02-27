
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sticker',(table)=>{
      table.increments();
      table.integer('userid');
      table.text('image_url');
      table.text('description');
      table.float('quantity');
      
      table.foreign('userid').references('userid').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sticker');
};

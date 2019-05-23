
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('listings', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.integer('price');
      table.integer('bedroom');
      table.string('location');
      table.string('shared');
      table.dateTime('create_at');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable()
  ])
};

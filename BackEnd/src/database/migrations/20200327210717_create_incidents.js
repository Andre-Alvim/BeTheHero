exports.up = function(knex) {
  knex.schema.createTable("incidents", function(tabble) {
    table.increments();

    table.string("titulo").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    // Relacionando
    table.string("ong_id").notNullable();
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};


exports.up = function(knex) {
   return knex.schema
      .createTable('recipes', table => {
         table.increments('recipe_id')
         table.string('recipe_name', 128).notNullable()
      })
      .createTable('ingredients', table => {
         table.increments('ingredient_id')
         table.string('ingredient_name', 128).notNullable()
      })
      .createTable('instructions', table => {
         table.increments('instruction_id')
         table.string('description', 128).notNullable()
         table.string('ingredient_amount', 128)
         table.integer('ingredient_id')
            .unsigned().notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
      .createTable('recipe_steps', table => {
         table.increments('step_id')
         table.integer('step_number').notNullable()
         table.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
         table.integer('instruction_id')
            .unsigned().notNullable()
            .references('instruction_id').inTable('instructions')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('recipe_steps')
      .dropTableIfExists('instructions')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
};

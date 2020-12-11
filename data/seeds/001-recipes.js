
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'peaches and buscuits'},
        {recipe_id: 2, recipe_name: 'pot roast'},
        {recipe_id: 3, recipe_name: 'chicken wings'}
      ]);
    });
};

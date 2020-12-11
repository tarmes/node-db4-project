
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {ingredient_id: 1, ingredient_Name: 'butter'},
        {ingredient_id: 2, ingredient_Name: 'chicken'},
        {ingredient_id: 3, ingredient_Name: 'buscuits'}
      ]);
    });
};

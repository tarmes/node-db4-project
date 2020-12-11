
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {instruction_id: 1, description: 'rowValue1', ingredient_id: , ingredient_amount},
        {instruction_id: 2, description: 'rowValue2', ingredient_id: , ingredient_amount},
        {instruction_id: 3, description: 'rowValue3', ingredient_id: , ingredient_amount}
      ]);
    });
};

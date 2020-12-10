# Node DB4 Module Project
hello world
## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push -u origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

- have a way to manage recipes.
- have a way to manage ingredients.
- a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
- when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
- have a way to save step by step instructions for preparing a recipe.

**Hint**: Before writing any code, write out all desired tables in the data model and determine all relationships between tables. 

### Migrations and Seeds

- Write a migration file that creates all tables necessary to model this data
- Write seed files to populate the tables with test data. **Hint**: Keep your recipes *very* simple or this step could become extremely time consuming.

### Data Access

In addition to the `migrations` and `seeding` scripts, write a data access file that **exports** an object with the following functions:

- `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

Organize and name your files anyway you see fit.

### Task 3: Stretch Goals

Build the following endpoints. Write any additional data access helpers as needed.

- `GET /api/recipes/`: all recipes (without details about ingredients or steps)
- `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe
- `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
- `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient 

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**

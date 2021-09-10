const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeId = await db('recipe_id').where('recipe_id', recipe_id)
    return recipeId
}

module.exports = { getRecipeById }
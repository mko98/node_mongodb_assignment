const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    amount: Number
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

const ingredient = new Ingredient({
    name: 'Broodje',
    amount: 2
}); ingredient.save();
console.log(ingredient);

module.exports = Ingredient;

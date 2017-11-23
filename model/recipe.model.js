const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        name: String,
        imageURL: String,
        description: String,
        ingredients: [{
            ingredientname: String,
            amount: Number
        }]

}, {
    timestamps: false
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' recipe (every time you require this file!)
const recipe = new Recipe({
    name: 'Kaas', imageURL: 'testurl.com', description: 'beschrijvingtest',
        ingredients: [{ingredientname: 'Frikandel', amount: 1}, {ingredientname:'Broodje', amount: 1} ]

}).save();

module.exports = Recipe;
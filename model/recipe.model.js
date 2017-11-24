const mongoose = require('mongoose');
const IngredientSchema = require('./ingredient.model');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        name: String,
        imageURL: String,
        description: String,
        ingredients: [IngredientSchema]
        // ingredients: [{
        //     ingredientname: String,
        //     amount: Number
        // }]
}, {
    timestamps: false
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' recipe (every time you require this file!)
const recipe = new Recipe({
    name: 'Broodje', imageURL: 'testurl.com', description: 'beschrijvingtest',
        ingredients: [{name: 'Frikandel', amount: 1}, {name:'Broodje', amount: 1} ]
}).save();

module.exports = Recipe;
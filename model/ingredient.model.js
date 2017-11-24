const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    amount: Number
});

module.exports = IngredientSchema;
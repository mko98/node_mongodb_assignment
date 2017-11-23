//
// ./api/v1/user.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/recipe.model');


//
// Geef een lijst van alle users.
//
routes.get('/recipes', function(req, res) {
    res.contentType('application/json');
    Recipe.find({})
        .then((recipes) => {
        console.log(recipes.ingredients);
            if (recipes.length === 0) {
                res.status(200).json('There are no recipes');
            }
            else {
                res.status(200).json(recipes);
            }
        })
        .catch((error) => res.status(401).json(error));
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/recipes/:name', function(req, res) {
    res.contentType('application/json');
    Recipe.find({ name: req.params.name} )
        .then((recipes) => {
            console.log(recipes);
            if (recipes.length === 0) {
                res.status(200).json('There are no recipes');
            }
            else {
                res.status(200).json(recipes);
            }
        })
        .catch((error) => res.status(401).json(error));
});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/users', function(req, res) {

});

//
// Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
//
routes.put('/users/:id', function(req, res) {

});

//
// Verwijder een bestaande user.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
//
routes.delete('/users/:id', function(req, res) {
    Recipe.remove({
        _id : req.params.id
    }, function (err, user) {
        if (err)
            res.send(err);

        Recipe.find(function(err, users) {
            if (err)
                res.send(err)
            res.json(users);
        });
    });
});

module.exports = routes;
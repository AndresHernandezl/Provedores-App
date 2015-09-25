// funciones controlador auth.js
var mongoose = require('mongoose');
var User = require('../models/users');

//para crear el token uso este service
var token = require('../token/token');
var config = require('../config');

var bcrypt = require('bcrypt');
var request = require('request');
var path = require('path');
var qs = require('querystring');
var jwt = require('jwt-simple');


exports.getUsers = function(req, res){
	User.find(function(err, users){
		console.log('Usuarios'+users);
		if (err) res.send(err);
		res.json(users);
	});
};


// function para registro de usuario crea el token
exports.signup = function(req, res){
	console.log(req.body);
	// objeto que recibe
	var user = new User({
		nombre: req.body.nombre,
		email: req.body.email,
		about: req.body.about,
		phone: req.body.phone,
		adress: req.body.adress,
		photo: req.body.photo,
		username: req.body.username,
		password: req.body.password
	});

	user.save(function(err){
		if (err) {return res.send({message: err}) }//Si hubo error
		return res // si todo esta bien
			.status(200)
			.send({userId: user._id, token: token.createToken(user)});

		// AQUÍ ENVÍO MAIL SI EL REGISTRO FUE EXITOSO
	});
};


// funcion para el login de usuario
exports.login = function(req, res){
	User.findOne({ username: req.body.username }, function(err, user){
		if (err) next(err);
		if(!user) {return res.status(401).send({message: 'No existe ese usuario'})}

		user.comparePassword(req.body.password, function(err, entra){
			if (err) throw err;
			if(!entra){return res.status(401).send({message: "Contraseña incorrecta"})}

			return res
				.status(200)
				.send({ userId: user._id, token: token.createToken(user) });
		});
	});
};

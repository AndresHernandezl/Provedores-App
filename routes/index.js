var express = require('express');
var router = express.Router();

// funciones de los controladores
var users = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/product', function(req, res, next) {
    res.render('product/index');
});
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});


// USERS
//router.post('/users', users.add_users); // registrar usuario - POST
router.post('users/signup', users.signup_email);
router.post('users/login', users.login);


module.exports = router;

var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;

var facebookConnection = function(){
    console.log('facebookConnection OK');

    passport.use(facebookStrategy({
        clientID: '521991621287214',
        clientSecret : '9a247630b3ff7fe18e975982a2e84375',
        callbackURL:'http://localhost/product'
    },function (accessToken ,RefreshToken , profile , done){
            done(null,profile);
    }));
    app.get('', passport.authenticate('facebook'));
    app.get('/product', passport.authenticate('facebook',{successRedirect: '/', failureRedirect: '/'}));
}
module.exports = facebookConnection;

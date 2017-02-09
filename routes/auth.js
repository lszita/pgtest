var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '1835276450091741',
    clientSecret: 'ad6066f488ab7fc696368861015200b2',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('token:' + accessToken);
    /*User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });*/
    done(null,{name: 'anyad',id: 1337});
  }
));

passport.serializeUser((user,done) => {
  console.log(user);
  done(null,user.id);
});

passport.deserializeUser((id, done) => {
  done(null, {name: 'anyad', id: id});
});

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/app',
                                      failureRedirect: '/'}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;                                      
var compose = require('composable-middleware');

module.exports = {
  isLoggedIn: function(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.render('index.ejs'); // load the index.ejs file
  },
  hasRole: function(role) {
    if (!role) {
      throw new Error('Required role needs to be set');
    }
    return compose()
      // .use(this.isLoggedIn())
      .use(function(req, res, next) {
        console.log(req.user.method, role);
        if (req.user.role === role) {
          next();
        } else {
          res.status(403).send('Forbidden');
        }
      });
  }
};
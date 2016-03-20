// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '507418682761621', // your App ID
        'clientSecret'  : '5a5a160e48c1c219603e394ec7ee87cd', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'AUXjN3aiHu2FheFeKvaHJJYJU',
        'consumerSecret'    : 'Ug4b5NTw8tpSvsVAzABKxWs0I8V7rpUvuAdyyH6hEfIgO8RkT2',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
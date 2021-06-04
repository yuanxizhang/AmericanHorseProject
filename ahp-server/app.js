require('./db/config/index'); 
const express = require('express'), 
app = express(), 
openRoutes = require('./routes/open/index'),
userRouter = require('./routes/secure/user'),
secureOrganization = require('./routes/secure/organization.route'),
secureHorses = require('./routes/secure/horse.route.js'),
passport = require('./middleware/authentication/index.js'),
cookieParser = require('cookie-parser'),
fileUpload = require('express-fileupload'),
path = require('path');

app.use(express.json()); 

app.use('/api', openRoutes)

app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use('/api', secureOrganization)
app.use('/api/horses/', secureHorses)

if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }

module.exports = app;  
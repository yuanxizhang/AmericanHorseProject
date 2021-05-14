require('./db/config/index'); 
const express = require('express'), 
app = express(), 
openRoutes = require('./routes/open/index'),
userRouter = require('./routes/secure/user'),
passport = require('./middleware/authentication/index.js'),
cookieparser = require('cookieparser'),
fileUpload = require('express-fileupload'),
path = require('path');

app.use(express.json()); 

app.use('/api', openRoutes)

if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }

module.exports = app;
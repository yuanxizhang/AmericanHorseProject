const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : '';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((instance) => 
    console.log(`Connected to db: ${instance.connection[0].name}`)
)
.catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;
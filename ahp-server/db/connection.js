const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : '';

mongoose.connect(process.env.DB,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false})
    .then(() => console.log("MongoDB Database Connected Successfully"))
    .catch(err => console.log(err));

module.exports = mongoose;
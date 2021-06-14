const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = require('./app')
const PORT = process.env.PORT || 5000;


// Connect to Mongo
mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false})
    .then(() => console.log("MongoDB Database Connected Successfully"))
    .catch(err => console.log(err));
app.use(cors());

app.listen(PORT, function() {
    console.log("Express server is running on Port: " + PORT);
});

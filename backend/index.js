const express = require('express');
const app = express();
const cors = require('cors');

// require('dotenv').config();

app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('express working');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});

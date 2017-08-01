require('dotenv').config()
const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

ejs.delimiter = '?';

const app = express();
const KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/:coordinates', (req, res) => {
	var coord = req.params.coordinates.split(',');
	var lat = parseInt(coord[0]);
	var lng = parseInt(coord[1]);

	axios.get(`https://api.darksky.net/forecast/${KEY}/${lat},${lng}`)
		.then((weather) => {
			console.log('Weather received');
			res.send(weather.data)
		})
		.catch((err) => {
			console.log('Error');
			res.send(err);
		});
});

app.get('*', (req, res) => {
	res.redirect('https://phizon.io')
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
});

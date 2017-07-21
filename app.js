require('dotenv').config()
const express = require('express');
const axios = require('axios');

const app = express();
const KEY = process.env.API_KEY;
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
});

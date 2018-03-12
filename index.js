const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/Empresa');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) =>
// {
// 	res.send({hola:"brgbrrbrg"});
// });


require('./routes/empresasRoutes')(app);


if (process.env.NODE_ENV === 'production')
{
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) =>
	{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT || 5000);
const express = require('express');
const app = express();

app.get('/', (req, res) =>
{
	res.send({hola:"brgbrrbrg"});
});

app.listen(process.env.PORT || 5000);
const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

const Empresa = mongoose.model('empresas');

module.exports = (app) =>
{
	app.get('/api/empresas', async (req, res) =>
	{
		const empresas = await Empresa.find({});
		res.send(empresas);
	});

	app.post('/api/empresas', async (req, res) =>
	{
		const { nombre, mail, fecha_corte } = req.body;

		const empresa = new Empresa({
			nombre, mail, fecha_corte
		});

		try
		{
			let empresa_guardada = await empresa.save();
			res.send(empresa_guardada);
		}
		catch (e) { res.status(422).send(e); }
	});
};
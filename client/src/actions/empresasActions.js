import axios from 'axios';

export const submitEmpresa = (values) => async (dispatch) =>
{
	dispatch({ type: 'submit_start' });

	try
	{
		await axios.post('/api/empresas', values);
		const res = await axios.get('/api/empresas');
		dispatch({ type: 'submit_success', payload: res.data });
	}
	catch(error) { dispatch({ type: 'submit_error', payload: error.message }); }
	
	
};

export const traerEmpresas = () => async (dispatch) =>
{
	const res = await axios.get('/api/empresas');
	dispatch({ type: 'traer_empresas', payload: res.data });
};
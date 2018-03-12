import axios from 'axios';
import { FETCH_EMPRESA } from '../types';

export const submitEmpresa = (values) => async (dispatch) =>
{
	const res = await axios.post('/api/empresas', values);
	dispatch({ type: FETCH_EMPRESA, payload: res.data });
};

export const traerEmpresas = () => async (dispatch) =>
{
	const res = await axios.get('/api/empresas');
	dispatch({ type: FETCH_EMPRESA, payload: res.data });
};
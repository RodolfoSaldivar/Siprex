// import { FETCH_EMPRESA } from '../types';

const INITIAL_STATE = {
	empresas: [],
	loading: false,
	error: ""
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case 'traer_empresas': return { ...state, empresas: action.payload};
		case 'submit_start': return { ...state, loading: true };
		case 'submit_success': return { ...state, loading: false, error: '', empresas: action.payload };
		case 'submit_error': return { ...state, loading: false, error: action.payload };
		default: return state;
	}
}
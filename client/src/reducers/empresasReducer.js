import { FETCH_EMPRESA } from '../types';

export default (state = [], action) =>
{
	switch (action.type)
	{
		case FETCH_EMPRESA: return action.payload || false;
		default: return state;
	}
}
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import empresasReducer from './empresasReducer';

export default combineReducers({
	form: reduxForm,
	empresas: empresasReducer
});
import { reduxForm, Field, reset } from 'redux-form';
import { Row, Col, Button, Modal, Preloader } from 'react-materialize'
import * as empresasActions from'../../actions/empresasActions';
import InputForma from '../InputForma';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';

//----> Los campos que la forma tiene con sus respectivos atributos
const camposForma = [
	{ name: 'nombre', label: 'NOMBRE', type: 'text' },
	{ name: 'mail', label: 'MAIL', type: 'text' },
	{ name: 'usuarios', label: 'MAX USUARIOS', type: 'number' },
	{ name: 'fecha_corte', label: 'FECHA CORTE', type: 'date' },
];

//----> Empieza el componente
const GuardarEmpresa = ({ submitEmpresa, handleSubmit, loading, error }) =>
{
	const cargarCampos = (casilla) =>
	{
		const { name, label, type } = camposForma[casilla];

		return (
			<Field
				key={name}
				name={name}
				label={label}
				type={type}
				component={InputForma}
			/>
		);
	}

	return (
		<Modal header='Guardar Empresa'
			trigger={<Button floating large waves='light' icon='add' />}
			actions={
				<div className="valign right">
					<Preloader size="small" className={ (loading) ? "" : "hide" } />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button waves='light' disabled={ loading }
						onClick={ handleSubmit((values) => submitEmpresa(values)) }
					>Guardar</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button className="modal-close" waves='light' disabled={ loading }>Cerrar</Button>
				</div>
			}
		>
			<form id="empresaForm">
				<div style={{marginTop: "60px"}} />
				<Row>
					<Col s={12} m={6}>
						{ cargarCampos(0) }
					</Col>
					<Col s={12} m={6}>
						{ cargarCampos(1) }
					</Col>
				</Row>
				<Row>
					<Col s={12} m={6}>
						{ cargarCampos(2) }
					</Col>
					<Col s={12} m={6}>
						{ cargarCampos(3) }
					</Col>
				</Row>			
			</form>
		</Modal>
	);
}

//----> Solo son funciones de validacion
function validate(values)
{
	const errors = {};

	_.each(camposForma, ({ name }) => {
		if (!values[name]) errors[name] = '*Requerido';
	});

	return errors;
}

//----> Con esta funcion hacemos que tenga acceso al action creator de submit empresa
const mapStateToProps = ({ empresasReducer: { loading, error } }) =>
{
	return { loading, error };
};

const submitSucces = (dispatch) =>
{
	dispatch(reset('empresaForm'));

};

//----> Primero conectamos con reduxForm y despues con los action creators
export default reduxForm({
	validate,
	form: 'empresaForm',
	onSubmitSuccess: (result, dispatch) => submitSucces(dispatch)
})(connect(mapStateToProps, empresasActions)(GuardarEmpresa));
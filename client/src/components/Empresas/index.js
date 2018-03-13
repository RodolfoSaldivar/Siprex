import React, { Component } from 'react';
import { Row, Col, Modal, Table, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { traerEmpresas } from '../../actions';

import GuardarEmpresa from './GuardarEmpresa';

class Empresas extends Component
{
	componentDidMount()
	{
		this.props.traerEmpresas();
	}

	ponerFilas()
	{
		return this.props.empresas.reverse().map((empresa) =>
		(
			<tr key={empresa._id}>
				<td><div className="border_top" />{ empresa.nombre }</td>
				<td><div className="border_top" />{ empresa.usuarios }</td>
				<td><div className="border_top" />{ empresa.fecha_corte }</td>
				<td className="center"><Button waves='light'>Escoger</Button></td>
				<td className="center">
					<div className="switch" id="cambiame_VFZFOVBRPT0">
						<label>
							No
							<input id="111" value="0" type="checkbox" />
							<span className="lever"></span>
							Si
						</label>
					</div>
				</td>
				<td className="valign">
					<Modal header='GuardarEmpresa Empresa'
						trigger={
							<a className="pointer">
								<i className="material-icons">edit</i>
							</a>
						}
					>
						<GuardarEmpresa />
					</Modal>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Modal header='Modal Header'
						trigger={
							<a className="pointer">
								<i className="material-icons">delete</i>
							</a>
						}
					>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					</Modal>
				</td>
			</tr>
		));
	}

	render()
	{
		console.log(this.props.empresas);
		return (
			<div>
				<Row className="margin_nada valign">
					<Col s={12} m={5} l={6}>
						<h4 className="valign">
							EMPRESAS
							&nbsp;
							<GuardarEmpresa />
						</h4>
					</Col>
					<Col s={6}>
						<Button waves='light'>Cambiar Empresa</Button>
					</Col>
				</Row>
				<Row>
					<Col s={12} l={10}>
						<Table>
							<thead>
								<tr>
									<th>NOMBRE</th>
									<th>MAX USUARIOS</th>
									<th>FECHA CORTE</th>
									<th></th>
									<th className="center">ACTIVO</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{ this.ponerFilas() }
							</tbody>
						</Table>
					</Col>
				</Row>
			</div>
		);
	}
}

function mapStateToProps({ empresas })
{
	return { empresas };
}

export default connect(mapStateToProps, { traerEmpresas })(Empresas);
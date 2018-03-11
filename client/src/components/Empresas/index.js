import React, { Component } from 'react';
import { Row, Col, Modal, Table, Button } from 'react-materialize'

import Guardar from './Guardar';

class Empresas extends Component
{
	render()
	{
		return (
			<div>
				<Row className="margin_nada valign">
					<Col s={12} m={5} l={6}>
						<h4 className="valign">
							EMPRESAS
							&nbsp;
							<Modal header='Guardar Empresa'
								trigger={<Button floating large waves='light' icon='add' />}
							>
								<Guardar />
							</Modal>
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
								<tr>
									<td>
										<div className="border_top" />
										nombre
									</td>
									<td>
										<div className="border_top" />
										10
									</td>
									<td>
										<div className="border_top" />
										11/04/2022
									</td>
									<td>
										<Button waves='light'>Escoger</Button>
									</td>
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
										<Modal header='Guardar Empresa'
											trigger={
												<a className="pointer">
													<i className="material-icons">edit</i>
												</a>
											}
										>
											<Guardar />
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
							</tbody>
						</Table>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Empresas;
import React, { Component } from 'react';
import { Row, Card, Table } from 'react-materialize'

class Seleccionar extends Component
{
	render()
	{
		return (
			<div className="login_layout center">
				<div style={{marginTop: "-5%"}} />
				<Card>
					<Row className="font_30">
						SELECCIONAR EMPRESA
					</Row>
					<Row>
						Verá la información como si fuera administrador de la empresa que escoga.
					</Row>

					<Table className="centered">
						<thead>
							<tr>
								<th>NOMBRE</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>
									<div className="border_top" />
									nombre
								</td>
							</tr>
							<tr>
								<td>
									<div className="border_top" />
									nombre
								</td>
							</tr>
							<tr>
								<td>
									<div className="border_top" />
									nombre
								</td>
							</tr>
							<tr>
								<td>
									<div className="border_top" />
									nombre
								</td>
							</tr>
						</tbody>
					</Table>
				</Card>
			</div>
		);
	}
}

export default Seleccionar;
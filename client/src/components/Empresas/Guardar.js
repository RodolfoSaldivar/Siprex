import React, { Component } from 'react';
import { Row, Col, Modal, Input, Button } from 'react-materialize'

class Guardar extends Component
{
	render()
	{
		return (
			<div>
				<div style={{marginTop: "60px"}} />
				<Row>
					<Col s={12} m={6}>
						<Input s={12} label="NOMBRE" />
					</Col>
					<Col s={12} m={6}>
						<Input s={12} label="MAIL" />
					</Col>
				</Row>
				<Row>
					<Col s={12} m={6}>
						<Input s={12} type="number" label="MAX USUARIOS" />
					</Col>
					<Col s={12} m={6}>
						<Input s={12} label="FECHA CORTE" type='date' onChange={function(e, value) {}} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Guardar;
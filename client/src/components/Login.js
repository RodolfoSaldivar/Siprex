import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize'

class Login extends Component
{
	consoleslo = (we) =>
	{
		console.log(we);
	};

	render()
	{
		return (
			<div className="login_layout">
				<Row>
					<Col s={12} m={10} l={8} offset="m1 l2">
						<Input s={12} placeholder="Nombre de usuario" label="Usuario" />
						<Input s={12} type="password" placeholder="Ingresar contraseña" label="Contraseña" />
						<div style={{marginTop: "20px"}} />
					</Col>
				</Row>
				<Row className="center">
					<Button waves='light'>Iniciar Sesión</Button>
					<div style={{marginTop: "20px"}} />
					<Button waves='light'>Registrate</Button>
				</Row>
			</div>
		);
	}
}

export default Login;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize'

class Header extends Component
{
	render()
	{
		return (
			<Navbar left>
				<li>
					<Link to="/empresas">
						Empresas
					</Link>
				</li>
				<li>
					<Link to="/presupuestos">
						Proyectos
					</Link>
				</li>
				<li>
					<Link to="/insumos">
						Insumos
					</Link>
				</li>
				<li>
					<Link to="/presupuestos">
						Presupuesto
					</Link>
				</li>
				<li>
					<Link to="/partidas">
						Conceptos
					</Link>
				</li>
			</Navbar>
		);
	}
}

export default Header;
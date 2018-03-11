import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import EmpresasSeleccionar from './Empresas/Seleccionar';
import Header from './Header';
import Empresas from './Empresas';

class App extends Component
{
	displayHeader()
	{
		// return;
		return <Header />;
	};

	render()
	{
		return (
			<div>
				<BrowserRouter>
					<div>
						{ this.displayHeader() }
						<div className="contenedor">
							<Route exact path="/" component={Login} />
							<Route exact path="/empresas/seleccionar" component={EmpresasSeleccionar} />
							<Route exact path="/empresas" component={Empresas} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
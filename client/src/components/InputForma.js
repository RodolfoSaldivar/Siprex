import React from 'react';
import { Input } from 'react-materialize'

const InputForma = ({ input, type, label, meta: {error, touched} }) =>
(
	<Input s={12} {...input} type={type} label={
		<span>
			{ label }
			<span style={{color:"red", marginLeft:"5px"}}>
				{touched && error}
			</span>
		</span>
	} />
);

export default InputForma;
import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador, setError }) => {
	const [colaborador, setColaborador] = useState({
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setColaborador({ ...colaborador, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!colaborador.nombre ||
			!colaborador.correo ||
			!colaborador.edad ||
			!colaborador.cargo ||
			!colaborador.telefono
		) {
			setError('Todos los campos son requeridos');
			return;
		}
		onAgregarColaborador(colaborador);
		setColaborador({
			nombre: '',
			correo: '',
			edad: '',
			cargo: '',
			telefono: '',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3 ">
				<input
					type="text"
					className="form-control"
					name="nombre"
					value={colaborador.nombre}
					onChange={handleChange}
					placeholder="Nombre del colaborador"
				/>
			</div>
			<div className="mb-3">
				<input
					type="email"
					className="form-control"
					name="correo"
					value={colaborador.correo}
					onChange={handleChange}
					placeholder="Email del colaborador"
				/>
			</div>
			<div className="mb-3">
				<input
					type="number"
					className="form-control"
					name="edad"
					value={colaborador.edad}
					onChange={handleChange}
					placeholder="Edad del colaborador"
				/>
			</div>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					name="cargo"
					value={colaborador.cargo}
					onChange={handleChange}
					placeholder="Cargo del colaborador"
				/>
			</div>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					name="telefono"
					value={colaborador.telefono}
					onChange={handleChange}
					placeholder="Teléfono del colaborador"
				/>
			</div>
			<button type="submit" className="btn btn-color w-100">
				Agregar Colaborador
			</button>
		</form>
	);
};

export default Formulario;

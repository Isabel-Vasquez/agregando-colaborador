import React, { useState } from 'react';

const Buscador = ({ colaboradores, setFilteredColaboradores }) => {
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		const searchText = e.target.value.toLowerCase();
		setQuery(searchText);
		const filtered = colaboradores.filter((colaborador) => {
			return (
				colaborador.nombre.toLowerCase().includes(searchText) ||
				colaborador.correo.toLowerCase().includes(searchText) ||
				colaborador.edad.toString().includes(searchText) ||
				colaborador.cargo.toLowerCase().includes(searchText) ||
				colaborador.telefono.includes(searchText)
			);
		});
		setFilteredColaboradores(filtered);
	};

	return (
		<div className="mb-3 w-50">
			<input
				type="text"
				className="form-control"
				placeholder="Busca un colaborador"
				value={query}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Buscador;

import React from 'react';

const Listado = ({ colaboradores }) => {
	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover text-center">
				<thead>
					<tr>
						<th scope="col">nombre</th>
						<th scope="col">correo</th>
						<th scope="col">edad</th>
						<th scope="col">cargo</th>
						<th scope="col">teléfono</th>
					</tr>
				</thead>
				<tbody>
					{colaboradores.map((colaborador) => (
						<tr key={colaborador.id}>
							<td>{colaborador.nombre}</td>
							<td>{colaborador.correo}</td>
							<td>{colaborador.edad}</td>
							<td>{colaborador.cargo}</td>
							<td>{colaborador.telefono}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Listado;

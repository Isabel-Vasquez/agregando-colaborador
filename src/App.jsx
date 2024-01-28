import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import './App.css';

function App() {
	const [colaboradores, setColaboradores] = useState(BaseColaboradores);
	const [filteredColaboradores, setFilteredColaboradores] = useState([]);
	const [alertMessage, setAlertMessage] = useState('');
	const [alertType, setAlertType] = useState('');
	const [alertBackgroundColor, setAlertBackgroundColor] = useState('');

	const agregarColaborador = (nuevoColaborador) => {
		setAlertMessage('');
		setAlertType('');
		setAlertBackgroundColor('');

		if (
			!nuevoColaborador.nombre ||
			!nuevoColaborador.correo ||
			!nuevoColaborador.edad ||
			!nuevoColaborador.cargo ||
			!nuevoColaborador.telefono
		) {
			setAlertMessage('Todos los campos son requeridos');
			setAlertType('danger');
			setAlertBackgroundColor('#f8d7da');
			return;
		}

		setColaboradores([
			...colaboradores,
			{ id: colaboradores.length + 1, ...nuevoColaborador },
		]);
		setAlertMessage('Colaborador agregado exitosamente');
		setAlertType('success');
		setAlertBackgroundColor('#d4edda');
	};

	const buscarColaborador = (query) => {
		const searchText = query.toLowerCase();
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
		<div className="container-fluid ">
			<div className="row">
				<div className="col-12 col-lg-8">
					<h1>Listado de Colaboradores</h1>
					<Buscador
						colaboradores={colaboradores}
						setFilteredColaboradores={setFilteredColaboradores}
					/>
					<Listado
						colaboradores={
							filteredColaboradores.length > 0
								? filteredColaboradores
								: colaboradores
						}
					/>
				</div>
				<div className="col-12 col-lg-3 mt-5 mt-md-0">
					<h2>Agregar Colaborador</h2>
					<Formulario
						onAgregarColaborador={agregarColaborador}
						setError={setAlertMessage}
					/>
					<Alert
						message={alertMessage}
						type={alertType}
						backgruondColor={alertBackgroundColor}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

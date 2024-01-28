import React from 'react';

const Alert = ({ message, type, backgroundColor }) => {
	if (!message) return null;

	const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

	return (
		<div
			className={`alert ${alertClass} mt-3`}
			style={{ backgroundColor }}
			role="alert"
		>
			{message}
		</div>
	);
};

export default Alert;

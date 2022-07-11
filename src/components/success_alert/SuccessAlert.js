import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = ({ idCompra }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su pedido fué confirmado con el ID: {idCompra}
			</Alert>
		</Stack>
	);
};
export default SuccessAlert
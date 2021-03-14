import { Button, Dialog, DialogContent } from '@material-ui/core';
import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';
import api from './api';

function App() {
	const [open, setOpen] = useState(false);

	const openDialog = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<CreateFoodForm postFood={api.postFood} />
				</DialogContent>
			</Dialog>
			<Button onClick={openDialog} variant='contained' color='primary'>
				Adicionar Comida
			</Button>
		</div>
	);
}

export default App;

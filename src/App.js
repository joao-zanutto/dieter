import { Button } from '@material-ui/core';
import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';

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
			<CreateFoodForm
				open={open}
				handleClose={handleClose}
			/>
			<Button onClick={openDialog} variant='contained' color='primary'>
				{' '}
				Adicionar Comida{' '}
			</Button>
		</div>
	);
}

export default App;

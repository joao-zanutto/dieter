import { Button, Dialog, DialogContent } from '@material-ui/core';
import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';
import { postFood } from './api';
import Header from './components/Header';
import Footer from './components/Footer';

const stats = {
	calIntake: 1300,
	calLimit: 2000,
	carbIntake: 200,
	carbLimit: 300,
	protIntake: 250,
	protLimit: 300,
	fatIntake: 90,
	fatLimit: 100,
};

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
			<Header />
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<CreateFoodForm postFood={postFood} />
				</DialogContent>
			</Dialog>
			<Button onClick={openDialog} variant='contained' color='primary'>
				Adicionar Comida
			</Button>
			<Footer stats={stats} />
		</div>
	);
}

export default App;

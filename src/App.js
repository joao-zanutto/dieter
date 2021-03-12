import { Button } from '@material-ui/core';
import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';

function App() {
	const [foodList, setFoodList] = useState([]);
	const [open, setOpen] = useState(false);

	const addFoodToList = (food) => {
		setFoodList([...foodList, food]);
	};

	const openDialog = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<CreateFoodForm
				addFoodToList={addFoodToList}
				open={open}
				handleClose={handleClose}
			/>
			<Button onClick={openDialog} variant='contained' color='primary'>
				{' '}
				Adicionar Comida{' '}
			</Button>

			<p>{JSON.stringify(foodList, null, 2)}</p>
		</div>
	);
}

export default App;

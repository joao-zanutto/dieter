import { Dialog, DialogContent, Grid } from '@material-ui/core';
import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';
import { postFood, getFoodList } from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodGalery from './components/FoodGalery';

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
	const [foodList, setFoodList] = useState([]);

	useState(() => {
		getFoodList(setFoodList);
	}, []);

	const openDialog = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<Header openDialog={openDialog} />
			<FoodGalery foodList={foodList} />
			<Footer stats={stats} />
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<CreateFoodForm postFood={postFood} />
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default App;

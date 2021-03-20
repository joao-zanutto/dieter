import { Dialog, DialogContent } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';
import {
	postFood,
	getFoodList,
	postAddQuantity,
	getStats,
	postDiminishQuantity,
} from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodGallery from './components/FoodGallery';

const limits = {
	calLimit: 2000,
	carbLimit: 300,
	protLimit: 300,
	fatLimit: 100,
};

function App() {
	const [open, setOpen] = useState(false);
	const [foodList, setFoodList] = useState([]);
	const [stats, setStats] = useState([]);

	const addQuantity = (id) => {
		postAddQuantity(id, setFoodList, setStats);
	};

	const diminishQuantity = (id) => {
		postDiminishQuantity(id, setFoodList, setStats);
	};

	useEffect(() => {
		getFoodList(setFoodList);
		getStats(setStats);
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
			<FoodGallery
				foodList={foodList}
				addQuantity={addQuantity}
				diminishQuantity={diminishQuantity}
			/>
			<Footer stats={stats} limits={limits} />
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<CreateFoodForm postFood={postFood} />
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default App;

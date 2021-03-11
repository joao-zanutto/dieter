import { useState } from 'react';
import CreateFoodForm from './components/CreateFoodForm';

function App() {
	const [foodList, setFoodList] = useState([]);

	const addFoodToList = (food) => {
		setFoodList([...foodList, food]);
	};

	return (
		<div className='App'>
			<CreateFoodForm addFoodToList={addFoodToList} />
			<p>{JSON.stringify(foodList, null, 2)}</p>
		</div>
	);
}

export default App;

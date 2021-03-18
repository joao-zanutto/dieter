import { create } from 'apisauce';

const api = create({ baseURL: 'http://localhost:3010' });

export const postFood = (food) => {
	api
		.post('/foods/', food)
		.then((response) => {
			alert(JSON.stringify(response.data, null, 2));
		})
		.catch((err) => console.log(err));
};

export const getFoodList = (setFoodList) => {
	api
		.get('/foods/')
		.then((response) => {
			setFoodList(response.data);
		})
		.catch((err) => console.log(err));
};

export const getStats = async (setStats) => {
	api
		.get('/stats/daily')
		.then((response) => {
			console.log(JSON.stringify(response.data, null, 2));
			setStats(response.data);
		})
		.catch((err) => console.log(err));
};

export const addQuantity = (id) => {
	api
		.get(`/consume/${id}`)
		.then((response) => {
			alert(response.data.message);
		})
		.catch((err) => console.log(err));
};

export const diminishQuantity = (id) => {
	api
		.get(`/diminish/${id}`)
		.then((response) => {
			alert(response.data.message);
		})
		.catch((err) => console.log(err));
};

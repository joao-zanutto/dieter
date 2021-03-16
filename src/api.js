import { create } from 'apisauce';

const api = create({ baseURL: 'http://localhost:3001' });

export const postFood = (food) => {
	api
		.post('/foods/', food)
		.then((response) => {
			if (response.status >= 200 && response.status < 300)
				return { message: 'success' };
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
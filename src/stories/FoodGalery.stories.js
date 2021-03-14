import React from 'react';

import FoodGalery from '../components/FoodGalery';

export default {
	title: 'FoodGalery',
	component: FoodGalery,
};

const Template = (args) => <FoodGalery {...args} />;

export const TwoElementsScenario = Template.bind({});

TwoElementsScenario.args = {
	foodList: [
		{
			foodName: 'Frango',
			portion: '100g',
			carb: 1,
			prot: 20,
			fat: 4,
		},
		{
			foodName: 'Carne',
			portion: '200g',
			carb: 2,
			prot: 30,
			fat: 10,
		},
	],
};

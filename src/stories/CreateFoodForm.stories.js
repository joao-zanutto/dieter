import React from 'react';

import CreateFoodForm from '../components/CreateFoodForm';

export default {
	title: 'CreateFoodForm',
	component: CreateFoodForm,
};

const Template = (args) => <CreateFoodForm {...args} />;

export const MockedCall = Template.bind({});

MockedCall.args = {
	postFood: (food) => {
		return {
			message: 'success',
		};
	},
};

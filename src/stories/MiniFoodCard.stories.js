import React from 'react';

import MiniFoodCard from '../components/MiniFoodCard';

export default {
	title: 'MiniFoodCard',
	component: MiniFoodCard,
};

const Template = (args) => <MiniFoodCard {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
	foodName: 'Frango',
	portion: '100g',
	carb: 1,
	prot: 20,
	fat: 4,
};

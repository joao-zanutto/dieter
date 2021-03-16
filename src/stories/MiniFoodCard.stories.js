import React from 'react';

import MiniFoodCard from '../components/MiniFoodCard';

export default {
	title: 'MiniFoodCard',
	component: MiniFoodCard,
};

const Template = (args) => <MiniFoodCard {...args} />;

export const PreviewFoodCard = Template.bind({});
export const GalleryCountZero = Template.bind({});
export const GalleryNormalSample = Template.bind({});

const sampleFood = {
	foodName: 'Frango',
	portion: '100g',
	carb: 1,
	prot: 20,
	fat: 4,
};

PreviewFoodCard.args = {
	food: sampleFood,
	count: 'preview',
};

GalleryCountZero.args = {
	food: sampleFood,
	count: 0,
};

GalleryNormalSample.args = {
	food: sampleFood,
	count: 2,
};

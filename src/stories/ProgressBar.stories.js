import React from 'react';

import ProgressBar from '../components/ProgressBar';

export default {
	title: 'ProgressBar',
	component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const CalInput = Template.bind({});
export const CarbInput = Template.bind({});
export const ProtInput = Template.bind({});
export const FatInput = Template.bind({});

CalInput.args = {
	progress: 400,
	limit: 2000,
	target: 'Cal',
};

CarbInput.args = {
	progress: 50,
	limit: 230,
	target: 'Carb',
};

ProtInput.args = {
	progress: 80,
	limit: 230,
	target: 'Prot',
};

FatInput.args = {
	progress: 30,
	limit: 90,
	target: 'Fat',
};

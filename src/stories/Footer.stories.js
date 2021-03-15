import React from 'react';

import Footer from '../components/Footer';

export default {
	title: 'Footer',
	component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const MockedFooter = Template.bind({});

MockedFooter.args = {
	stats: {
		calIntake: 1300,
		calLimit: 2000,
		carbIntake: 200,
		carbLimit: 300,
		protIntake: 250,
		protLimit: 300,
		fatIntake: 90,
		fatLimit: 100,
	},
};

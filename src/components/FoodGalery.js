import { Grid } from '@material-ui/core';
import React from 'react';
import MiniFoodCard from './MiniFoodCard';

const FoodGalery = ({ foodList }) => {
	return (
		<Grid container spacing={2}>
			{foodList.map((food) => {
				return (
					<Grid item>
						<MiniFoodCard food={food}></MiniFoodCard>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default FoodGalery;

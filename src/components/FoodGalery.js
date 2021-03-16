import { Grid } from '@material-ui/core';
import React from 'react';
import MiniFoodCard from './MiniFoodCard';

const styles = {
	container: {
		padding: '30px',
		paddingBottom: '80px',
		paddingTop: '80px',
	},
};

const FoodGalery = ({ foodList }) => {
	return (
		<Grid container style={styles.container} spacing={2}>
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

import {
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';

const cal = (carb, prot, fat) => {
	if (isNaN(carb)) carb = 0;
	if (isNaN(prot)) prot = 0;
	if (isNaN(fat)) fat = 0;

	return 4 * carb + 4 * prot + 9 * fat;
};

const styles = {
	Card: {
		width: '100%',
		maxWidth: 250,
	},
};

const MiniFoodCard = ({ food }) => {
	return (
		<Card elevation={5} style={styles.Card}>
			<CardContent>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography variant='h6'>
							{food.foodName === '' ? 'Comida' : food.foodName}
						</Typography>
						<Typography variant='h7'>{food.portion}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>
							Calorias: {cal(food.carb, food.prot, food.fat)}kcal
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Carbo: {food.carb}g</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Protein: {food.prot}g</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Gordura: {food.fat}g</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default MiniFoodCard;

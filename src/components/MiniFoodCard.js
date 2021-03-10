import {
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';

const MiniFoodCard = ({ foodName, portion, carb, prot, fat }) => {
	return (
		<Card elevation={5}>
			<CardContent>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography variant='h6'>
							{foodName === '' ? 'Comida' : foodName}
						</Typography>
						<Typography variant='h7'>{portion}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Carbo: {carb}g</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Protein: {prot}g</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='p'>Gordura: {fat}g</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default MiniFoodCard;

import {
	Card,
	CardContent,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import MiniFoodCard from './components/MiniFoodCard';

function App() {
	const formik = useFormik({
		initialValues: {
			foodName: '',
			portion: '100g',
			carb: Number,
			prot: Number,
			fat: Number,
			kcal: 0,
		},
	});

	return (
		<div className='App'>
			<Card style={{ width: '60vw' }} elevation={3}>
				<CardContent>
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<Typography variant='h5'> Criação de Comida </Typography>
						</Grid>

						<Grid item xs={12}>
							<Divider />
						</Grid>

						<Grid item container xs={12} spacing={2}>
							<Grid item xs={12}>
								<TextField
									fullWidth
									autocomplete='off'
									variant='outlined'
									label='Nome do alimento'
									value={formik.values.foodName}
									onChange={formik.handleChange}
									name='foodName'
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									fullWidth
									autocomplete='off'
									variant='outlined'
									label='Porção do alimento'
									value={formik.values.portion}
									onChange={formik.handleChange}
									name='portion'
								/>
							</Grid>
						</Grid>
						<Grid item container xs={12} sm={6} spacing={2}>
							<Grid item xs={12}>
								<TextField
									autocomplete='off'
									variant='outlined'
									label={`Carboídratos (g/${formik.values.portion})`}
									value={formik.values.carb}
									onChange={formik.handleChange}
									name='carb'
									type='number'
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									autocomplete='off'
									variant='outlined'
									label={`Proteínas (g/${formik.values.portion})`}
									value={formik.values.prot}
									onChange={formik.handleChange}
									name='prot'
									type='number'
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									autocomplete='off'
									variant='outlined'
									label={`Gorduras (g/${formik.values.portion})`}
									value={formik.values.fat}
									onChange={formik.handleChange}
									name='fat'
									type='number'
								/>
							</Grid>
						</Grid>

						<Grid item xs={12} sm={6}>
							<MiniFoodCard
								foodName={formik.values.foodName}
								portion={formik.values.portion}
								carb={formik.values.carb}
								prot={formik.values.prot}
								fat={formik.values.fat}
							/>
						</Grid>

						<p>{JSON.stringify(formik.values, null, 2)}</p>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}

export default App;

import {
	Button,
	Card,
	CardContent,
	Dialog,
	DialogContent,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import MiniFoodCard from './MiniFoodCard';

function CreateFoodForm({ addFoodToList, open, handleClose }) {
	const formik = useFormik({
		initialValues: {
			foodName: '',
			portion: '100g',
			carb: Number,
			prot: Number,
			fat: Number,
		},
		onSubmit: (values) => {
			let carb = values.carb,
				prot = values.prot,
				fat = values.fat;

			if (isNaN(carb)) carb = 0;
			if (isNaN(prot)) prot = 0;
			if (isNaN(fat)) fat = 0;

			const food = {
				carb: carb,
				prto: prot,
				fat: fat,
				foodName: values.foodName,
				portion: values.portion,
			};

			addFoodToList(food);
		},
	});

	const resetFields = () => {
		formik.setValues(formik.initialValues);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<Card elevation={0}>
					<CardContent>
						<Grid container justify='space-between' spacing={4}>
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

							<Grid item xs={12}>
								<Divider />
							</Grid>

							<Grid item container xs={12} sm={6} spacing={2}>
								<Grid item xs={12}>
									<TextField
										fullWidth
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
										fullWidth
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
										fullWidth
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

							<Grid item xs={11} sm={6}>
								<MiniFoodCard
									foodName={formik.values.foodName}
									portion={formik.values.portion}
									carb={formik.values.carb}
									prot={formik.values.prot}
									fat={formik.values.fat}
								/>
							</Grid>

							<Grid item container alignContent='right' spacing={2}>
								<Grid item>
									<Button
										onClick={formik.handleSubmit}
										raised
										variant='contained'
										color='primary'>
										Salvar
									</Button>
								</Grid>
								<Grid item>
									<Button
										onClick={resetFields}
										raised
										variant='contained'
										color='secondary'>
										Limpar
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</DialogContent>
		</Dialog>
	);
}

export default CreateFoodForm;

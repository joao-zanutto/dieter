import { AppBar, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import ProgressBar from './ProgressBar';

const styles = {
	background: {
		height: '60px',
		backgroundColor: '#FFFFFF',
		position: 'fixed',
		padding: '20px',
		bottom: 0,
		boxShadow: '0px 0px 10px grey',
		width: '100%',
	},
	container: {
		width: '100%',
	},
};

const Header = ({ stats }) => {
	return (
		<div style={styles.background}>
			<Grid container spacing={4} style={styles.container}>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.calIntake}
						limit={stats.calLimit}
						target='Cal'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.carbIntake}
						limit={stats.carbLimit}
						target='Carb'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.protIntake}
						limit={stats.protLimit}
						target='Prot'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.fatIntake}
						limit={stats.fatLimit}
						target='Fat'
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;

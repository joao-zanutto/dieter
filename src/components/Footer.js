import { Grid } from '@material-ui/core';
import React from 'react';
import ProgressBar from './ProgressBar';

const styles = {
	background: {
		height: '35px',
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

const Header = ({ stats, limits }) => {
	return (
		<div style={styles.background}>
			<Grid container spacing={3} style={styles.container}>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.cal}
						limit={limits.calLimit}
						target='Cal'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.carb}
						limit={limits.carbLimit}
						target='Carb'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.prot}
						limit={limits.protLimit}
						target='Prot'
					/>
				</Grid>
				<Grid item xs={3}>
					<ProgressBar
						progress={stats.fat}
						limit={limits.fatLimit}
						target='Fat'
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;

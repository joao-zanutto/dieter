import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const styles = {
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: '8px',
	},
	title: {
		flexGrow: 1,
	},
};

const Header = ({ openDialog }) => {
	return (
		<div style={styles.root}>
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton edge='start' style={styles.menuButton} color='inherit'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' style={styles.title}>
						Diário
					</Typography>
					<div>
						<IconButton
							onClick={openDialog}
							variant='contained'
							color='inherit'>
							<Add />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

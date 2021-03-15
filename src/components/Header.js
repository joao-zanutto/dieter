import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
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

const Header = () => {
	return (
		<div style={styles.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton edge='start' style={styles.menuButton} color='inherit'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' style={styles.title}>
						Photos
					</Typography>
					<div>
						<IconButton color='inherit'>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

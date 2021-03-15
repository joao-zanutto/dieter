import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = {
	root: {
		width: '100%',
	},
	bar: {
		height: '13px',
		borderRadius: '100px',
	},
};

const LinearProgressWithLabel = ({ progress, limit, target }) => {
	return (
		<Box display='flex' flexDirection='column' alignItems='center'>
			<Box width='100%' mr={1}>
				<LinearProgress
					variant='determinate'
					value={Math.round((100 * progress) / limit)}
					style={styles.bar}
					color={target === 'Cal' ? 'secondary' : 'primary'}
				/>
			</Box>
			<Box minWidth={35}>
				<Typography
					variant='body2'
					color='textSecondary'>{`${target}: ${progress} / ${limit} ${
					target === 'Cal' ? 'kcal' : 'g'
				} (${Math.round((100 * progress) / limit)}%)`}</Typography>
			</Box>
		</Box>
	);
};

const ProgressBar = ({ progress, limit, target }) => {
	return (
		<div style={styles.root}>
			<LinearProgressWithLabel
				progress={progress}
				limit={limit}
				target={target}
			/>
		</div>
	);
};

export default ProgressBar;

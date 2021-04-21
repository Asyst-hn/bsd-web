import React from 'react';
import {
	TextField,
	Typography,
	TextFieldProps,
	makeStyles
} from '@material-ui/core';

interface CustomProps {
	myLabel?: string;
}

export const TextInput: React.FC<TextFieldProps & CustomProps> = props => {
	const classes = style();
	return (
		<div className={classes.root}>
			<Typography className={classes.label} color='textPrimary'>
				{props.myLabel}
			</Typography>
			<TextField {...props} className={classes.input} />
		</div>
	);
};

const style = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column'
	},
	label: {
		alignSelf: 'flex-start',
		marginBottom: '0px'
	},
	input: {
		marginTop: '0px',
		marginBottom: '18px',
		width: '50%'
	}
});

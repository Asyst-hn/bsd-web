import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

interface SIProps {
	searchString: string;
	setSearchString: (searchString: string) => void;
}

export const SearchInput: React.FC<SIProps> = props => {
	return (
		<TextField
			size='small'
			variant='outlined'
			value={props.searchString}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				props.setSearchString(e.target.value)
			}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='-2.5 -2.5 24 24'
							width='18'
							height='18'
							preserveAspectRatio='xMinYMin'
							fill='rgb(105,105,105)'
						>
							<path d='M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z'></path>
						</svg>
					</InputAdornment>
				)
			}}
		></TextField>
	);
};

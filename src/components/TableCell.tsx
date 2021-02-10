import React from 'react';
import { Link } from 'react-router-dom';
import { CellParams } from '@material-ui/data-grid';

interface Props {
	pathname: string;
	params: CellParams;
}

export const TableCell: React.FC<Props> = props => {
	return (
		<Link
			to={props.pathname + '/' + props.params.row.id}
			style={{
				width: '100%',
				height: '100%',
				paddingLeft: '16px',
				paddingRight: '16px',
				color: 'grey'
			}}
		>
			{props.params.value}
		</Link>
	);
};

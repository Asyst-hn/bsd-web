import React from 'react';
import { Link } from 'react-router-dom';
import { CellParams } from '@material-ui/data-grid';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Props {
	pathname: string;
	params: CellParams;
}

export const TableCellDate: React.FC<Props> = props => {
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
			{format(parseISO(props.params.value as string), 'PPP', {
				locale: es
			})}
		</Link>
	);
};

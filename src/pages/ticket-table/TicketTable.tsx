import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { api } from '../../utils/api';
import { useAuth } from '../../context/auth';
import { Button, Typography } from '@material-ui/core';
import { TableCell } from '../../components/TableCell';
import { SearchInput } from '../../components/SearchInput';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { MUI_GRID_SPANISH_LOCALE_TEXT } from '../../utils/spanishLocaleText';
import { useStyles } from './styles';

export const TicketTable: React.FC = () => {
	const classes = useStyles();
	const { url } = useRouteMatch();
	const { token } = useAuth();
	const columns = buildColumns(url);
	const [rows, setRows] = useState<RowsProp>([]);
	const [searchString, setSearchString] = useState('');

	return (
		<div className={classes.root}>
			<div className={classes.actionBar}>
				<Typography variant='h5' color='primary'>
					Tickets
				</Typography>
			</div>
			<DataGrid
				rows={rows}
				columns={columns}
				paginationMode='client'
				disableColumnFilter
				localeText={MUI_GRID_SPANISH_LOCALE_TEXT}
				className={classes.grid}
			/>
		</div>
	);
};

const buildRows = (
	customers: any[],
	searchString: string,
	setRows: (rows: RowsProp) => void
) => {
	const rows: RowsProp = [];

	if (customers) {
		const filteredCustomers = customers.filter(customer => {
			return (
				customer.legal_name?.toLowerCase().includes(searchString) ||
				customer.trade_name?.toLowerCase().includes(searchString) ||
				customer.billing_email?.toLowerCase().includes(searchString) ||
				customer.tax_id?.toString().toLowerCase().includes(searchString)
			);
		});

		filteredCustomers.forEach(customer => {
			rows.push({
				id: customer.id,
				tn: customer.trade_name,
				ln: customer.legal_name,
				tid: customer.tax_id,
				be: customer.billing_email
			});
		});
		setRows(rows);
	}
	setRows(rows);
};

const buildColumns = (pathname: string) => {
	const columns: ColDef[] = [
		{
			field: 'tn',
			headerName: 'Nombre Comercial',
			flex: 1,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'ln',
			headerName: 'Nombre Legal',
			flex: 1,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'be',
			headerName: 'Correo Electronico',
			flex: 1,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'tid',
			headerName: 'RTN',
			description: 'Registro Tributario Nacional',
			flex: 1,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		}
	];
	return columns;
};

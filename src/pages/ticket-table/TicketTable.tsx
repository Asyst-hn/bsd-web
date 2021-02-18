import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { api } from '../../utils/api';
import { Button, Typography } from '@material-ui/core';
import { TableCell } from '../../components/TableCell';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { MUI_GRID_SPANISH_LOCALE_TEXT } from '../../utils/spanishLocaleText';
import { useStyles } from './styles';
import { useTickets } from '../../hooks/useTickets';
import {
	Ticket,
	TicketTypeMap,
	ClientTypeMap,
	StatusTypeMap
} from '../../utils/types';
import { TableCellDate } from '../../components/TableCellDate';
import { useAuth } from '../../context/auth';

export const TicketTable: React.FC = () => {
	const classes = useStyles();
	const { url } = useRouteMatch();
	const { userId } = useAuth();
	const columns = buildColumns(url);
	const [rows, setRows] = useState([]);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [ticketCount, setTicketCount] = useState(0);

	const { data: ticketTypes } = useQuery('ticket-types', () =>
		api({ path: 'Sdk_Tickets/GetAllTipoSoli', method: 'GET' })
	);
	const { data: clients } = useQuery('clients', () =>
		api({ path: `Sdk_Tickets/GetAllClientes/${userId}`, method: 'GET' })
	);
	const { data: statuses } = useQuery('statuses', () =>
		api({ path: 'Sdk_Tickets/GetAllEstados', method: 'GET' })
	);
	const { data: tickets } = useQuery('tickets', () =>
		api({
			path: `Sdk_Tickets/GetAllTickets/${userId}&2021-02-01&2021-02-15`,
			method: 'GET'
		})
	);

	useEffect(() => {
		buildRows(
			mapTicket(
				tickets?.data,
				ticketTypes?.data as TicketTypeMap[],
				clients?.data as ClientTypeMap[],
				statuses?.data as StatusTypeMap[]
			),
			setRows
		);
		setTicketCount(tickets?.data.length);
	}, [tickets]);

	return (
		<div className={classes.root}>
			<div className={classes.actionBar}>
				<Typography variant='h5' color='primary'>
					Tickets
				</Typography>
				<Typography variant='h5' color='primary'>
					{'Cantidad: ' + ticketCount}
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

const mapTicket = (
	tickets: Ticket[],
	types: TicketTypeMap[],
	clients: ClientTypeMap[],
	statuses: StatusTypeMap[]
) => {
	if (tickets.length > 0) {
		const mappedTickets = tickets.map(ticket => {
			types.forEach(type => {
				if (ticket.tipReq === type.tipReq) {
					ticket.tipReq = type.nomTip;
				}
			});
			clients.forEach(client => {
				if (ticket.codCli === client.codCli) {
					ticket.codCli = client.nomCli;
				}
			});
			statuses.forEach(status => {
				if (ticket.staReq === status.staReq) {
					ticket.staReq = status.nomSta;
				}
			});
			return ticket;
		});

		return mappedTickets;
	} else {
		return [];
	}
};

const buildRows = (tickets: Ticket[], setRows: (rows: any) => void) => {
	const rows: RowsProp = [];

	if (tickets) {
		tickets.forEach(ticket => {
			rows.push({
				id: ticket.lnkSol,
				tt: ticket.tipReq,
				st: ticket.staReq,
				fe: ticket.fecemi,
				cc: ticket.codCli,
				sj: ticket.subJet
			});
		});
		setRows(rows);
	}
	setRows(rows);
};

const buildColumns = (pathname: string) => {
	const columns: ColDef[] = [
		{
			field: 'fe',
			headerName: 'Fecha de Emisión',
			flex: 0.65,
			renderCell: params => (
				<TableCellDate pathname={pathname} params={params} />
			)
		},
		{
			field: 'tt',
			headerName: 'Tipo',
			flex: 0.75,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'st',
			headerName: 'Estado',
			flex: 0.5,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'cc',
			headerName: 'Cliente',
			flex: 0.5,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		},
		{
			field: 'sj',
			headerName: 'Asunto',
			flex: 1.5,
			renderCell: params => (
				<TableCell pathname={pathname} params={params} />
			)
		}
	];
	return columns;
};

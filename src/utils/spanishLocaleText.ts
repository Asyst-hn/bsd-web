export const MUI_GRID_SPANISH_LOCALE_TEXT = {
	// Root
	rootGridLabel: 'grid',

	// Density selector toolbar button text
	toolbarDensity: 'Densidad',
	toolbarDensityLabel: 'Densidad',
	toolbarDensityCompact: 'Compacto',
	toolbarDensityStandard: 'Estandar',
	toolbarDensityComfortable: 'Comodo',

	// Columns selector toolbar button text
	toolbarColumns: 'Columnas',
	toolbarColumnsLabel: 'Selector de Columnas',

	// Filters toolbar button text
	toolbarFilters: 'Filtros',
	toolbarFiltersLabel: 'Mostrar Filtros',
	toolbarFiltersTooltipHide: 'Esconder Filtros',
	toolbarFiltersTooltipShow: 'Mostrar Filtros',
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	toolbarFiltersTooltipActive: (count: number) =>
		`${count} filtro(s) activo(s)`,

	// Columns panel text
	columnsPanelTextFieldLabel: 'Encontrar Columna',
	columnsPanelTextFieldPlaceholder: 'Titulo de Columna',
	columnsPanelDragIconLabel: 'Reordenar Columna',
	columnsPanelShowAllButton: 'Mostrar Todo',
	columnsPanelHideAllButton: 'Esconder Todo',

	// Filter panel text
	filterPanelAddFilter: 'Agregar Filtro',
	filterPanelDeleteIconLabel: 'Eliminar',
	filterPanelOperators: 'Operadores',
	filterPanelOperatorAnd: 'Y ',
	filterPanelOperatorOr: 'O',
	filterPanelColumns: 'Columnas',

	// Column menu text
	columnMenuLabel: 'Menu',
	columnMenuShowColumns: 'Mostrar Columnas',
	columnMenuFilter: 'Filtrar',
	columnMenuHideColumn: 'Esconder',
	columnMenuUnsort: 'Quitar Orden',
	columnMenuSortAsc: 'Ordenar por Asc',
	columnMenuSortDesc: 'Ordernar por Desc',

	// Column header text
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	columnHeaderFiltersTooltipActive: (count: number) =>
		`${count} filtro(s) activo(s)`,
	columnHeaderFiltersLabel: 'Mostrar Filtros',
	columnHeaderSortIconLabel: 'Ordenar',

	// Rows selected footer text
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	footerRowSelected: (count: number) =>
		count !== 1
			? `${count.toLocaleString()} filas seleccionadas`
			: `${count.toLocaleString()} fila seleccionada`,

	// Total rows footer text
	footerTotalRows: 'Total de Filas:',

	// Pagination footer text
	footerPaginationRowsPerPage: 'Filas por Pagina:'
};

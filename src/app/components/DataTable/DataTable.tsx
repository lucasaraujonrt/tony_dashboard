import { makeStyles } from '@material-ui/core';
import {
  Columns,
  DataGrid,
  PageChangeParams,
  RowsProp,
} from '@material-ui/data-grid';
import React from 'react';

import { translate } from '~/services/i18n';

interface IProps {
  columns: Columns,
  rows: RowsProp,
  page?: number,
  pageSize?: number,
  rowCount: number,
  orderBy: string,
  sort?: 'asc' | 'desc',
  isDESC?: boolean,
  valueFormatter?: () => string,
  onChange: (params: advancedFilterModels.IBaseFilter) => any
}

const useStyles = makeStyles({
  root: {
    colCell: {
      flex: 1,
      minWidth: '1px !important',
      maxWidth: 'none !important'
    },
    viewport: {
      '& .rendering-zone': {
        width: 'initial !important',
        maxWidth: 'initial !important'
      }
    },
    row: {
      width: '100% !important'
    },
    colCellWrapper: {
      display: 'flex'
    },
    cell: {
      flex: 1,
      minWidth: '1px !important',
      maxWidth: 'none !important',
      '&:last-of-type': {
        minWidth: '0 !important',
        flex: 0
      }
    }
  },
});

const DataTable: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();

  const onPage = (pageChangeParams: PageChangeParams) => {
    if (pageChangeParams.pageSize === 100) { return; }

    const IBaseFilter: advancedFilterModels.IBaseFilter = {
      orderBy: props.orderBy,
      page: pageChangeParams.page,
      pageSize: pageChangeParams.pageSize,
      sort: props.sort,
      isDESC: props.isDESC,
    };

    if (IBaseFilter.page !== props.page || IBaseFilter.pageSize !== props.pageSize) {
      props.onChange(IBaseFilter);
    }
  };

  return (
    <div className="datatable">
      <DataGrid
        className={classes.root}
        paginationMode="server"
        rows={props.rows}
        columns={props.columns.map((o) => ({ ...o, sortable: false, filterable: false }))}
        pageSize={props.pageSize}
        rowCount={props.rowCount}
        onPageChange={onPage}
        disableColumnFilter
        disableColumnReorder
        disableColumnSelector
        disableSelectionOnClick
        disableColumnMenu
        disableMultipleColumnsSorting
        // disableExtendRowFullWidth
        pagination
        localeText={{
          footerPaginationRowsPerPage: translate('COMPONENTS.DATA_TABLE.FOOTER.ROWS_PER_PAGE'),
        }}
      />
    </div>
  );

};

export default DataTable;

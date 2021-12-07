import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { CellParams } from '@material-ui/data-grid';

import * as UserActions from '@portal/store/User/action';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { getRouteStackPath } from '@portal/config/routes';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import AdvancedFilter from '@portal/components/AdvancedFilter/AdvancedFilter';
import { AdvancedFilterType } from '@portal/enum/advancedFilter';
import DataTable from '@portal/components/DataTable/DataTable';
import NavigationService from '@portal/services/navigation';
import DataTableActions from '@portal/components/DataTableActions/DataTableActions';
import { translate } from '@portal/services/i18n';
import { useReduxState } from '@portal/hooks/useReduxState';
import { DateTime } from 'luxon';
import { maskPhone } from '@portal/services/masks';

const searchFields: utils.SearchParams[] = [
  {
    name: 'name',
    placeholder: 'Nome',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
  },
  {
    name: 'createdAt',
    placeholder: 'Mês/Ano',
    type: AdvancedFilterType.DATE_PICKER,
    defaultValue: '',
    format: 'dd/MM/yyyy',
  },
];

const initialValues = {
  pageSize: 10,
  page: 1,
  orderBy: 'createdAt',
  sort: 'desc',
};

const UserReport: React.FC = () => {
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const dispatch = useDispatch();
  const { user } = useReduxState();

  useEffect(() => {
    const filter = NavigationService.getQuery();
    onSearch({
      ...advancedFilters,
      ...filter,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advancedFilters]);

  const onSearch = (filters: any) => {
    dispatch(UserActions.getReport(filters));
  };

  // const onRemove = (id: string) => {
  //   const filter = NavigationService.getQuery();
  //   onSearch({
  //     ...advancedFilters,
  //     ...filter,
  //   });
  // };

  return (
    <div className="report">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.USER.REPORT.TITLE')}
            pageDescription={translate('PAGES.PANEL.USER.REPORT.DESCRIPTION')}
          />
        </Col>
        <Col lg={6} className="text-right">
          <Link
            to={`${getRouteStackPath('USER', 'USER_DETAILS')}/${translate(
              'PAGES.SHARED.ADD_ID'
            )}`}
          >
            <AdvancedButton
              text={translate('SHARED.ADD')}
              startIcon={<PlusCircleOutlined />}
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <AdvancedFilter
            fields={searchFields}
            onSearch={(filters: any) => onSearch(filters)}
          />
        </Col>
      </Row>
      <div className="report__table">
        <Row>
          <Col>
            <div className="report__table__inner">
              <DataTable
                rows={user?.list?.rows || []}
                rowCount={user?.list?.count || 0}
                columns={[
                  {
                    field: 'id',
                    headerName: 'id',
                    flex: 1,
                    sortable: false,
                    hide: true,
                  },
                  {
                    field: 'name',
                    headerName: 'Nome',
                    flex: 1,
                    sortable: false,
                  },
                  {
                    field: 'email',
                    headerName: 'E-mail',
                    flex: 1,
                  },
                  {
                    field: 'cellphone',
                    headerName: 'Telefone',
                    flex: 1,
                    renderCell: (o) => {
                      return <>{o.value && maskPhone(o.value as string)}</>;
                    },
                  },
                  {
                    field: 'createdAt',
                    headerName: 'Criado em',
                    flex: 1,
                    renderCell: (o: CellParams) => {
                      return (
                        <>
                          {DateTime.fromISO(o.value as string).toLocaleString(
                            DateTime.DATETIME_SHORT
                          )}
                        </>
                      );
                    },
                  },
                  {
                    align: 'center',
                    field: 'actions',
                    headerName: 'Ações',
                    headerAlign: 'center',
                    renderCell: (o: CellParams) => (
                      <DataTableActions
                        row={o.row}
                        basePath={getRouteStackPath('USER', 'USER_DETAILS')}
                      />
                    ),
                  },
                ]}
                page={advancedFilters.page}
                pageSize={advancedFilters.pageSize}
                sort="desc"
                orderBy={advancedFilters.orderBy}
                onChange={(filters: any) => {
                  const searchFilters = {
                    ...advancedFilters,
                    ...filters,
                  };
                  setAdvancedFilters(searchFilters);
                  onSearch(searchFilters);
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserReport;

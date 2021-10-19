import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import * as Employee from '@portal/store/Employee/action';
import { getRouteStackPath } from '@portal/config/routes';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import AdvancedFilter from '@portal/components/AdvancedFilter/AdvancedFilter';
import { AdvancedFilterType } from '@portal/enum/advancedFilter';
import DataTable from '@portal/components/DataTable/DataTable';
import NavigationService from '@portal/services/navigation';
import { CellParams } from '@material-ui/data-grid';
import DataTableActions from '@portal/components/DataTableActions/DataTableActions';
import { translate } from '@portal/services/i18n';
import { profileType } from '@portal/utils/profileType';
import { useReduxState } from '@portal/hooks/useReduxState';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

const searchFields: utils.SearchParams[] = [
  {
    name: 'name',
    placeholder: 'Nome',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
  },
  {
    name: 'company',
    placeholder: 'Empresa',
    type: AdvancedFilterType.SELECT,
    defaultValue: '',
  },
  {
    name: 'profileType',
    placeholder: 'Tipo de perfil',
    type: AdvancedFilterType.SELECT,
    defaultValue: '',
    options: profileType,
  },
  {
    name: 'startDate',
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
  offset: 0,
  limit: 10,
};

const EmployeeReport: React.FC = () => {
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const dispatch = useDispatch();
  const { employee } = useReduxState();

  const onSearch = (filters: any) => {
    dispatch(Employee.getReport(filters));
  };

  useEffect(() => {
    const filter = NavigationService.getQuery();
    onSearch({
      ...advancedFilters,
      ...filter,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advancedFilters]);

  const onRemove = (id: string) => {
    const filter = NavigationService.getQuery();
    onSearch({
      ...advancedFilters,
      ...filter,
    });
  };

  return (
    <div className="report">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.EMPLOYEE.REPORT.TITLE')}
            pageDescription={translate(
              'PAGES.PANEL.EMPLOYEE.REPORT.DESCRIPTION'
            )}
          />
        </Col>
        <Col lg={6} className="text-right">
          <Link to={getRouteStackPath('USER', 'EMPLOYEE_DETAILS')}>
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
                rows={employee.list?.rows || []}
                rowCount={employee.list?.count || 0}
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
                    field: 'company',
                    headerName: 'Empresa',
                    flex: 1,
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
                    renderCell: (o: CellParams) => {
                      return (
                        <DataTableActions
                          row={o.row}
                          basePath={getRouteStackPath(
                            'USER',
                            'EMPLOYEE_DETAILS'
                          )}
                          onRemove={onRemove}
                        />
                      );
                    },
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

export default EmployeeReport;

import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import * as ServiceCallActions from '@portal/store/ServiceCall/action';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { getRouteStackPath } from '@portal/config/routes';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import AdvancedFilter from '@portal/components/AdvancedFilter/AdvancedFilter';
import { AdvancedFilterType } from '@portal/enum/advancedFilter';
import DataTable from '@portal/components/DataTable/DataTable';
import NavigationService from '@portal/services/navigation';
import { CellParams } from '@material-ui/data-grid';
import DataTableActions from '@portal/components/DataTableActions/DataTableActions';
import { translate } from '@portal/services/i18n';
import { getCurrentPriority, priority } from '@portal/utils/priority';
import { getCurrentStatus, status } from '@portal/utils/status';
import { useDispatch } from 'react-redux';
import { useReduxState } from '@portal/hooks/useReduxState';
import { DateTime } from 'luxon';

const searchFields: utils.SearchParams[] = [
  {
    name: 'status',
    placeholder: 'Status',
    type: AdvancedFilterType.SELECT,
    defaultValue: '',
    options: status,
  },
  {
    name: 'priority',
    placeholder: 'Prioridade',
    type: AdvancedFilterType.SELECT,
    defaultValue: '',
    options: priority,
  },
  {
    name: 'sector',
    placeholder: 'Setor',
    type: AdvancedFilterType.SELECT,
    defaultValue: '',
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
};

const ServiceCallReport: React.FC = () => {
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const dispatch = useDispatch();
  const { serviceCall } = useReduxState();

  useEffect(() => {
    const filter = NavigationService.getQuery();
    onSearch({
      ...advancedFilters,
      ...filter,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advancedFilters]);

  const onSearch = (filters: any) => {
    dispatch(ServiceCallActions.getReport(filters));
  };

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
            pageTitle={translate('PAGES.PANEL.SERVICE_CALL.REPORT.TITLE')}
            pageDescription={translate(
              'PAGES.PANEL.SERVICE_CALL.REPORT.DESCRIPTION'
            )}
          />
        </Col>
        <Col lg={6} className="text-right">
          <Link to={getRouteStackPath('SERVICE_CALL', 'SERVICE_CALL_DETAILS')}>
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
                rows={serviceCall.list?.rows || []}
                rowCount={serviceCall.list?.count || 0}
                columns={[
                  {
                    field: 'id',
                    headerName: 'id',
                    flex: 1,
                    sortable: false,
                    hide: true,
                  },
                  {
                    field: 'description',
                    headerName: 'Descrição',
                    flex: 1,
                    sortable: false,
                  },
                  {
                    field: 'status',
                    headerName: 'Status do chamado',
                    flex: 1,
                    renderCell: (o: CellParams) => {
                      return <>{getCurrentStatus(o.value as number)?.name}</>;
                    },
                  },
                  {
                    field: 'priority',
                    headerName: 'Prioridade do chamado',
                    flex: 1,
                    renderCell: (o: CellParams) => {
                      return <>{getCurrentPriority(o.value as number)?.name}</>;
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
                        basePath={getRouteStackPath(
                          'SERVICE_CALL',
                          'SERVICE_CALL_DETAILS'
                        )}
                        onRemove={onRemove}
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

export default ServiceCallReport;

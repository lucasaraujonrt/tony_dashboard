import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import * as CompanyActions from '@portal/store/Company/action';
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
import { useDispatch } from 'react-redux';
import { useReduxState } from '@portal/hooks/useReduxState';
import { maskCnpj } from '@portal/services/masks';

const searchFields: utils.SearchParams[] = [
  {
    name: 'name',
    placeholder: 'Nome',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
  },
  {
    name: 'nameFantasy',
    placeholder: 'Nome fantasia',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
  },
  {
    name: 'document',
    placeholder: 'CNPJ',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
    format: '99.999.999/9999-99',
  },
  {
    name: 'startDate',
    placeholder: 'Mês/Ano',
    type: AdvancedFilterType.DATE_PICKER,
    defaultValue: '',
    format: 'dd/MM/yyyy',
  },
  {
    name: 'profile',
    placeholder: 'Administrador',
    type: AdvancedFilterType.CHECKBOX,
    defaultValue: '',
  },
];

const initialValues = {
  page: 1,
  pageSize: 10,
  orderBy: 'createdAt',
  sort: 'desc',
};

const CompanyReport: React.FC = () => {
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const dispatch = useDispatch();
  const { list } = useReduxState().company;

  const onSearch = (filters: any) => {
    dispatch(CompanyActions.getReport(filters));
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
            pageTitle={translate('PAGES.PANEL.COMPANY.REPORT.TITLE')}
            pageDescription={translate(
              'PAGES.PANEL.COMPANY.REPORT.DESCRIPTION'
            )}
          />
        </Col>
        <Col lg={6} className="text-right">
          <Link to={getRouteStackPath('COMPANY', 'COMPANY_DETAILS')}>
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
                rows={list?.rows || []}
                rowCount={list?.count || 0}
                columns={[
                  {
                    field: 'id',
                    headerName: 'id',
                    flex: 1,
                    sortable: false,
                    hide: true,
                  },
                  {
                    field: 'fantasyName',
                    headerName: 'Nome fantasia',
                    flex: 1,
                    sortable: false,
                  },
                  {
                    field: 'cellphone',
                    headerName: 'Celular',
                    flex: 1,
                    sortable: false,
                  },
                  {
                    field: 'area',
                    headerName: 'Área',
                    flex: 1,
                  },
                  {
                    field: 'cep',
                    headerName: 'Cep',
                    flex: 1,
                  },
                  {
                    field: 'cnpj',
                    headerName: 'CNPJ',
                    flex: 1,
                    renderCell: (o) => {
                      return (
                        <>{o.value ? maskCnpj(o.value as string) : '--'}</>
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
                            'COMPANY',
                            'COMPANY_DETAILS'
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

export default CompanyReport;

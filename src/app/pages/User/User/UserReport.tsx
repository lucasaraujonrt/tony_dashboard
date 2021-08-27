import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

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

const searchFields: utils.SearchParams[] = [
  {
    name: 'name',
    placeholder: 'Nome',
    type: AdvancedFilterType.TEXT,
    defaultValue: '',
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
    placeholder: 'Admin',
    type: AdvancedFilterType.CHECKBOX,
    defaultValue: '',
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

const UserReport: React.FC = () => {
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);

  const onSearch = (filters: any) => {
    console.log('filters', filters);
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
            pageTitle={translate('PAGES.PANEL.USER.REPORT.TITLE')}
            pageDescription={translate('PAGES.PANEL.USER.REPORT.DESCRIPTION')}
          />
        </Col>
        <Col lg={6} className="text-right">
          <Link to={getRouteStackPath('USER', 'DETAILS')}>
            <AdvancedButton
              text="Adicionar usuário"
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
                rows={[]}
                rowCount={100}
                columns={[
                  {
                    field: 'name',
                    headerName: 'Nome',
                    flex: 1,
                    sortable: false,
                  },
                  {
                    field: 'name',
                    headerName: 'Tipo',
                    flex: 1,
                  },
                  {
                    field: 'name',
                    headerName: 'Empresa',
                    flex: 1,
                  },
                  {
                    align: 'center',
                    field: 'name',
                    headerName: 'Empresa',
                    renderCell: (o: CellParams) => {
                      return (
                        <DataTableActions
                          row={o.row}
                          basePath={getRouteStackPath('USER', 'DETAILS')}
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

export default UserReport;

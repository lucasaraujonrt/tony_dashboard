import React, { useEffect } from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';
import { Divider } from 'antd';
import KpiCard, { VariantKpiCard } from '@portal/components/KpiCard/KpiCard';
import * as KPIAction from '@portal/store/Kpi/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { useDispatch } from 'react-redux';

const KpiDetails: React.FC = () => {
  const { list } = useReduxState().kpi;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(KPIAction.getReport());
  }, [dispatch]);

  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.KPI.TITLE')}
            pageDescription={translate('PAGES.PANEL.KPI.DESCRIPTION')}
          />
        </Col>
      </Row>
      <Divider />
      <div className="details__kpi__card">
        <KpiCard
          title="Usuários"
          firstValue={list && list.totalUsers}
          secondValue={list && list.totalEmployees}
          thirdValue={list && list.totalCompanyAdmins}
          variant={VariantKpiCard.USER}
        />

        <KpiCard
          title="Chamados"
          firstValue={list && list.totalServiceCallsPending}
          secondValue={list && list.totalServiceCallsWIP}
          thirdValue={list && list.totalServiceCallsDone}
          variant={VariantKpiCard.SERVICE_CALL}
        />
      </div>
    </Container>
  );
};

export default KpiDetails;

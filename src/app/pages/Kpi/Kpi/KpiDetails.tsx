import React from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';
import { Divider } from 'antd';
import KpiCard, { VariantKpiCard } from '@portal/components/KpiCard/KpiCard';

const KpiDetails: React.FC = () => {
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
          firstValue="235"
          secondValue="456"
          thirdValue="809"
          variant={VariantKpiCard.USER}
        />

        <KpiCard
          title="Chamados"
          firstValue="235"
          secondValue="456"
          thirdValue="809"
          variant={VariantKpiCard.SERVICE_CALL}
        />
      </div>
    </Container>
  );
};

export default KpiDetails;

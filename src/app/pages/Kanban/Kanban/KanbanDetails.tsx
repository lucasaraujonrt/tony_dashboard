import React from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';
import { Divider } from 'antd';
import Card from '@portal/components/Card/Card';

const KanbanDetails: React.FC = () => {
  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.KANBAN.TITLE')}
            pageDescription={translate('PAGES.PANEL.KANBAN.DESCRIPTION')}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col md={3} className="kanban__inner__title">
          Criados
          <div className="kanban__inner__board">
            <Card
              description="Problema no encanamento da pia daquele apartamento"
              priority="Alta"
              sector="Encanamento"
              createdAt="Criado em 22 de setembro"
            />

            <Card
              description="Problema no encanamento da pia daquele apartamento"
              priority="Alta"
              sector="Encanamento"
              createdAt="Criado em 22 de setembro"
            />
          </div>
        </Col>

        <Col md={3} className="kanban__inner__title">
          Em progresso
          <div className="kanban__inner__board">
            <Card
              description="Problema no encanamento da pia daquele apartamento"
              priority="Alta"
              sector="Encanamento"
              createdAt="Criado em 22 de setembro"
            />
          </div>
        </Col>

        <Col md={3} className="kanban__inner__title">
          Finalizados
          <div className="kanban__inner__board">
            <Card
              description="Problema no encanamento da pia daquele apartamento"
              priority="Alta"
              sector="Encanamento"
              createdAt="Criado em 22 de setembro"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KanbanDetails;

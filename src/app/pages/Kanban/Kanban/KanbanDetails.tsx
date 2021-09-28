import React from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';
import { Divider } from 'antd';
import Card from '@portal/components/Card/Card';
import IconBlueCircle from '~/assets/svg/ic_blue_circle.svg';
import IconYellowCircle from '~/assets/svg/ic_yellow_circle.svg';
import IconGreenCircle from '~/assets/svg/ic_green_circle.svg';

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
        <Col className="kanban__inner__title">
          Criados
          <img
            src={IconBlueCircle}
            alt="Icone círculo criado"
            className="kanban__inner__icon"
          />
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

        <Col className="kanban__inner__title">
          <Divider className="kanban__divider" type="vertical" />
        </Col>

        <Col className="kanban__inner__title">
          Em progresso
          <img
            src={IconYellowCircle}
            alt="Icone círculo criado"
            className="kanban__inner__icon"
          />
          <div className="kanban__inner__board">
            <Card
              description="Problema no encanamento da pia daquele apartamento"
              priority="Alta"
              sector="Encanamento"
              createdAt="Criado em 22 de setembro"
            />
          </div>
        </Col>

        <Col className="kanban__inner__title">
          <Divider className="kanban__divider" type="vertical" />
        </Col>

        <Col className="kanban__inner__title">
          Finalizados
          <img
            src={IconGreenCircle}
            alt="Icone círculo criado"
            className="kanban__inner__icon"
          />
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

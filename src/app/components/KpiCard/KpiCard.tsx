import React from 'react';
import { Divider } from 'antd';
import { Col, Row } from 'react-bootstrap';

export enum VariantKpiCard {
  SERVICE_CALL,
  USER,
}

interface KpiCardProps {
  title: string;
  firstValue: string;
  secondValue: string;
  thirdValue: string;
  variant: VariantKpiCard;
}

const KpiCard = ({
  title,
  firstValue,
  secondValue,
  thirdValue,
  variant,
}: KpiCardProps) => (
  <div className="kpi__card">
    {variant === VariantKpiCard.SERVICE_CALL && (
      <div>
        <div>
          <h1 className="kpi__card__inner__title">{title}</h1>
        </div>

        <div>
          <Row>
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Realizados</label>
              <span className="kpi__card__inner__title">{firstValue}</span>
            </Col>
            <Divider type="vertical" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Em andamento</label>
              <span className="kpi__card__inner__title">{secondValue}</span>
            </Col>
            <Divider type="vertical" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Finalizados</label>
              <span className="kpi__card__inner__title">{thirdValue}</span>
            </Col>
          </Row>
        </div>
      </div>
    )}

    {variant === VariantKpiCard.USER && (
      <div>
        <div>
          <h1 className="kpi__card__inner__title">{title}</h1>
        </div>

        <div>
          <Row>
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Ativos no App</label>
              <span className="kpi__card__inner__title">{firstValue}</span>
            </Col>
            <Divider type="vertical" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Funcionários</label>
              <span className="kpi__card__inner__title">{secondValue}</span>
            </Col>
            <Divider type="vertical" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__title">Administradores</label>
              <span className="kpi__card__inner__title">{thirdValue}</span>
            </Col>
          </Row>
        </div>
      </div>
    )}
  </div>
);

export default KpiCard;

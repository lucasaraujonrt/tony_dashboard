import React from 'react';
import { Divider } from 'antd';
import { Col, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';

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

        <div className="kpi__card__row">
          <Row>
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate('COMPONENTS.KPI_CARD.SERVICE_CALL.CREATED.LABEL')}
              </label>
              <span className="kpi__card__inner__first__span">
                {firstValue}
              </span>
            </Col>
            <Divider type="vertical" className="kpi__card__divider" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate(
                  'COMPONENTS.KPI_CARD.SERVICE_CALL.IN_PROGRESS.LABEL'
                )}
              </label>
              <span className="kpi__card__inner__second__span">
                {secondValue}
              </span>
            </Col>
            <Divider type="vertical" className="kpi__card__divider" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate('COMPONENTS.KPI_CARD.SERVICE_CALL.DONE.LABEL')}
              </label>
              <span className="kpi__card__inner__third__span">
                {thirdValue}
              </span>
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

        <div className="kpi__card__row">
          <Row>
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate('COMPONENTS.KPI_CARD.USER.ACTIVE.LABEL')}
              </label>
              <span className="kpi__card__inner__first__span">
                {firstValue}
              </span>
            </Col>
            <Divider type="vertical" className="kpi__card__divider" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate('COMPONENTS.KPI_CARD.USER.EMPLOYEES.LABEL')}
              </label>
              <span className="kpi__card__inner__second__span">
                {secondValue}
              </span>
            </Col>
            <Divider type="vertical" className="kpi__card__divider" />
            <Col className="kpi__card__col">
              <label className="kpi__card__inner__label">
                {translate('COMPONENTS.KPI_CARD.USER.ADM.LABEL')}
              </label>
              <span className="kpi__card__inner__third__span">
                {thirdValue}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    )}
  </div>
);

export default KpiCard;

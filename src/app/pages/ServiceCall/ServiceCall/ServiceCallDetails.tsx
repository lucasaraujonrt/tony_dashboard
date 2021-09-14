import React, { useState } from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import AdvancedSelect from '@portal/components/AdvancedSelect/AdvancedSelect';
import { Divider } from 'antd';
import { translate } from '@portal/services/i18n';
import { status } from '@portal/utils/status';
import { priority } from '@portal/utils/priority';

const initialValues: models.ServiceCallForm = {
  priority: '',
  status: '',
  description: '',
  sectorId: '',
  clientId: '',
  employeeId: '',
};

const ServiceCallDetails: React.FC = () => {
  const [form, setForm] = useState(initialValues);

  const onFormSubmit = () => {};

  const onFormChange = (key: string, value: string | boolean) => {
    setForm((prevState: models.ServiceCallForm) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.SERVICE_CALL_DETAILS.TITLE')}
            pageDescription={translate(
              'PAGES.SERVICE_CALL_DETAILS.DESCRIPTION'
            )}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <AdvancedForm onSubmit={onFormSubmit}>
            <Divider />
            <div className="details__form">
              <Row>
                <Col>
                  <AdvancedInput
                    value={form.description}
                    multiline
                    label={translate(
                      'PAGES.SERVICE_CALL_DETAILS.LABEL_DESCRIPTION'
                    )}
                    placeholder={translate(
                      'PAGES.SERVICE_CALL_DETAILS.PLACEHOLDER'
                    )}
                    onChange={(value: string) =>
                      onFormChange('description', value)
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={5}>
                  <AdvancedSelect
                    value={form.clientId}
                    label={translate('PAGES.SERVICE_CALL_DETAILS.LABEL_CLIENT')}
                    onChange={(value: string) =>
                      onFormChange('clientId', value)
                    }
                  />
                </Col>

                <Col>
                  <AdvancedSelect
                    value={form.priority}
                    label={translate(
                      'PAGES.SERVICE_CALL_DETAILS.LABEL_PRIORITY'
                    )}
                    onChange={(value: string) =>
                      onFormChange('priority', value)
                    }
                    options={priority}
                  />
                </Col>

                <Col>
                  <AdvancedSelect
                    value={form.status}
                    label={translate('PAGES.SERVICE_CALL_DETAILS.LABEL_STATUS')}
                    onChange={(value: string) => onFormChange('status', value)}
                    options={status}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedSelect
                    value={form.sectorId}
                    label={translate('PAGES.SERVICE_CALL_DETAILS.LABEL_SECTOR')}
                    onChange={(value: string) =>
                      onFormChange('sectorId', value)
                    }
                  />
                </Col>

                <Col>
                  <AdvancedSelect
                    value={form.employeeId}
                    label={translate(
                      'PAGES.SERVICE_CALL_DETAILS.LABEL_EMPLOYEE'
                    )}
                    onChange={(value: string) =>
                      onFormChange('employeeId', value)
                    }
                  />
                </Col>
              </Row>

              <div className="details__form__actions">
                <Row>
                  <Col className="text-right">
                    <AdvancedButton
                      type="submit"
                      text={translate(
                        'PAGES.SERVICE_CALL_DETAILS.LABEL_BUTTON'
                      )}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </AdvancedForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceCallDetails;

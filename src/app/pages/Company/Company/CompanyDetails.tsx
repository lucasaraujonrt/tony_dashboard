import React, { useState } from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import { maskCEP, maskCnpj, maskPhone } from '@portal/services/masks';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import AdvancedSelect from '@portal/components/AdvancedSelect/AdvancedSelect';
import { Divider } from 'antd';
import { translate } from '@portal/services/i18n';
import { states } from '@portal/utils/states';

// import { Container } from './styles';

const initialValues: models.CompanyForm = {
  name: '',
  fantasyName: '',
  cellphone: '',
  email: '',
  segment: '',
  address: '',
  number: '',
  cep: '',
  district: '',
  city: '',
  uf: '',
  area: '',
  cnpj: '',
};

const CompanyDetails: React.FC = () => {
  const [form, setForm] = useState(initialValues);

  const onFormSubmit = () => {};

  const onFormChange = (key: string, value: string | boolean) => {
    setForm((prevState: models.CompanyForm) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.COMPANY_DETAILS.TITLE')}
            pageDescription={translate('PAGES.COMPANY_DETAILS.DESCRIPTION')}
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
                    value={form.name}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_NAME')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('name', value)}
                  />
                </Col>

                <Col>
                  <AdvancedInput
                    value={form.fantasyName}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_FANTASY')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('fantasyName', value)
                    }
                  />
                </Col>
                <Col md={3}>
                  <AdvancedInput
                    value={maskPhone(form.cellphone)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_PHONE')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('cellphone', value)
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedInput
                    value={form.email}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_EMAIL')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('email', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={form.segment}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_SEGMENT')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('segment', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <AdvancedInput
                    value={maskCEP(form.cep)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CEP')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('cep', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={form.address}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_ADDRESS')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('address', value)}
                  />
                </Col>
                <Col md={2}>
                  <AdvancedInput
                    value={form.number}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_NUMBER')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('number', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <AdvancedInput
                    value={form.district}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_DISTRICT')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('district', value)
                    }
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={form.city}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CITY')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('city', value)}
                  />
                </Col>
                <Col md={3}>
                  <AdvancedSelect
                    value={form.uf}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_UF')}
                    onChange={(value: string) => onFormChange('uf', value)}
                    options={states}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedInput
                    value={form.area}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_AREA')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('area', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={maskCnpj(form.cnpj)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CNPJ')}
                    placeholder={translate('PAGES.COMPANY_DETAILS.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('cnpj', value)}
                  />
                </Col>
              </Row>

              <div className="details__form__actions">
                <Row>
                  <Col className="text-right">
                    <AdvancedButton
                      type="submit"
                      text={translate('PAGES.COMPANY_DETAILS.LABEL_BUTTON')}
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

export default CompanyDetails;

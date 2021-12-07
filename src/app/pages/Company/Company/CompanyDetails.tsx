import React, { useEffect, useState } from 'react';
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
import { SaveOutlined } from '@ant-design/icons';
import { useLocation, useParams } from 'react-router-dom';
import { getPageType } from '@portal/utils/page';
import * as CompanyActions from '@portal/store/Company/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { useDispatch } from 'react-redux';
import { PAGE_TYPE } from '@portal/enum/pageType';
import { cnpjValidation, removeSpecialChars } from '@portal/services/strings';
import * as MessageService from '@portal/services/message';

const initialValues: models.CompanyForm = {
  name: '',
  fantasyName: '',
  cellphone: '',
  email: '',
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
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [pageType] = useState(getPageType());
  const params = useParams() as { id: string };
  const { details } = useReduxState().company;

  const onFormSubmit = () => {
    const formValues = Object.values(form);

    if (!details) {
      for (const index in formValues) {
        if (
          String(formValues[index]).trim() === '' ||
          formValues[index] === null
        ) {
          return MessageService.error('APPLICATION.ERRORS.EMPTY_FORM');
        }
      }
      if (removeSpecialChars(form.cellphone as string).length !== 12) {
        return MessageService.error(
          'Preencha o campo de telefone corretamente'
        );
      }
      if (!cnpjValidation(removeSpecialChars(form.cnpj))) {
        return MessageService.error('Preencha o campo de CNPJ corretamente');
      }
      if (form.cep.length !== 9) {
        return MessageService.error('Preencha o campo de CEP corretamente');
      }
    }

    if (details) {
      dispatch(
        CompanyActions.put({
          ...form,
          cep: removeSpecialChars(form.cep),
          cellphone: removeSpecialChars(form.cellphone),
        })
      );
    } else {
      dispatch(
        CompanyActions.create({
          ...form,
          cep: removeSpecialChars(form.cep),
          cellphone: removeSpecialChars(form.cellphone),
        })
      );
    }
  };

  const onFormChange = (key: string, value: string | boolean) => {
    setForm((prevState: models.CompanyForm) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (pageType === PAGE_TYPE.EDIT) {
      dispatch(CompanyActions.getDetail(params.id));
    } else {
      dispatch(CompanyActions.cleanDetails());
    }
  }, [pathname, pageType, dispatch, params.id]);

  useEffect(() => {
    if (details) {
      //@ts-ignore
      setForm(details);
    } else {
      setForm(initialValues);
    }
  }, [details]);

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
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('name', value)}
                  />
                </Col>

                <Col>
                  <AdvancedInput
                    value={form.fantasyName}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_FANTASY')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('fantasyName', value)
                    }
                  />
                </Col>
                <Col md={3}>
                  <AdvancedInput
                    value={maskPhone(form.cellphone)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_PHONE')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
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
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('email', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={maskCnpj(form.cnpj)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CNPJ')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('cnpj', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <AdvancedInput
                    value={maskCEP(form.cep)}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CEP')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('cep', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={form.address}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_ADDRESS')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('address', value)}
                  />
                </Col>
                <Col md={2}>
                  <AdvancedInput
                    value={form.number}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_NUMBER')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('number', value)}
                    type="number"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <AdvancedInput
                    value={form.district}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_DISTRICT')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('district', value)
                    }
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={form.city}
                    label={translate('PAGES.COMPANY_DETAILS.LABEL_CITY')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
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
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('area', value)}
                  />
                </Col>
              </Row>

              <div className="details__form__actions">
                <Row>
                  <Col className="text-right">
                    <AdvancedButton
                      type="submit"
                      text={translate('SHARED.SAVE')}
                      startIcon={<SaveOutlined />}
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

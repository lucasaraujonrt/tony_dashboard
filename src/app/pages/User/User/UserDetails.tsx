import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';

import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import { maskCEP, maskPhone } from '@portal/services/masks';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PAGE_TYPE } from '@portal/enum/pageType';
import * as UserActions from '@portal/store/User/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { SaveOutlined } from '@ant-design/icons';
import { removeSpecialChars } from '@portal/services/strings';
import AdvancedSelect from '@portal/components/AdvancedSelect/AdvancedSelect';
import { states } from '@portal/utils/states';
import * as MessageService from '@portal/services/message';

const initialValues: models.UserForm = {
  name: '',
  email: '',
  password: '',
  cellphone: '',
  profileType: 0,
  cep: '',
  address: '',
  number: '',
  district: '',
  city: '',
  uf: '',
};

const UserDetails: React.FC = () => {
  const [form, setForm] = useState(initialValues);
  const dispatch = useDispatch();
  const [pageType] = useState(getPageType());
  const params = useParams() as { id: string };
  const { pathname } = useLocation();
  const { details } = useReduxState().user;

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  console.log({ pageType });

  useEffect(() => {
    if (pageType === PAGE_TYPE.EDIT) {
      dispatch(UserActions.getDetail(params.id));
    } else {
      dispatch(UserActions.cleanDetails());
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
      if (form.cellphone.length !== 16) {
        console.log(form.cellphone.length);
        return MessageService.error(
          'Preencha o campo de telefone corretamente'
        );
      }
      console.log(form.cellphone.length);
      if (form.cep.length !== 9) {
        return MessageService.error('Preencha o campo de CEP corretamente');
      }
    }

    if (details) {
      dispatch(
        UserActions.putUser({
          ...form,
          cep: removeSpecialChars(form.cep),
          cellphone: removeSpecialChars(form.cellphone),
        })
      );
    } else {
      dispatch(
        UserActions.createUser({
          ...form,
          name: form.name,
          email: form.email,
          password: form.password,
          profileType: form.profileType,
          cep: removeSpecialChars(form.cep),
          cellphone: removeSpecialChars(form.cellphone),
        })
      );
    }
  };

  const onFormChange = (key: string, value: string | boolean) => {
    setForm((prevState: models.UserForm) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.USER_DETAILS.TITLE')}
            pageDescription={translate('PAGES.USER_DETAILS.DESCRIPTION')}
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
                    label={translate('PAGES.USER_DETAILS.LABEL_NAME')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('name', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={maskPhone(form.cellphone)}
                    label={translate('PAGES.USER_DETAILS.LABEL_PHONE')}
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
                    label={translate('PAGES.USER_DETAILS.LABEL_EMAIL')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('email', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedInput
                    value={form.password}
                    label={translate('PAGES.USER_DETAILS.LABEL_PASSWORD')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) =>
                      onFormChange('password', value)
                    }
                    type="password"
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={confirmPassword}
                    label={translate(
                      'PAGES.USER_DETAILS.LABEL_CONFIRM_PASSWORD'
                    )}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={setConfirmPassword}
                    type="password"
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

export default UserDetails;

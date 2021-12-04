import React, { useEffect, useState } from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import { maskPhone } from '@portal/services/masks';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import { translate } from '@portal/services/i18n';
import { Divider } from 'antd';
import AdvancedSelect from '@portal/components/AdvancedSelect/AdvancedSelect';
import { profileType } from '@portal/utils/profileType';
import { SaveOutlined } from '@ant-design/icons';
import * as EmployeeActions from '@portal/store/Employee/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { useLocation, useParams } from 'react-router-dom';
import { getPageType } from '@portal/utils/page';
import { useDispatch } from 'react-redux';
import { PAGE_TYPE } from '@portal/enum/pageType';

// import { Container } from './styles';

const initialValues: models.EmployeeForm = {
  name: '',
  email: '',
  password: '',
  cellphone: '',
  company: '',
  profileType: '',
};

const EmployeeDetails: React.FC = () => {
  const [form, setForm] = useState(initialValues);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [pageType] = useState(getPageType());
  const params = useParams() as { id: string };
  const { details } = useReduxState().employee;
  console.log({ params });

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onFormSubmit = () => {};

  const onFormChange = (key: string, value: string | boolean) => {
    setForm((prevState: models.EmployeeForm) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (pageType === PAGE_TYPE.EDIT) {
      dispatch(EmployeeActions.getDetail(params.id));
    } else {
      dispatch(EmployeeActions.cleanDetails());
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
            pageTitle={translate('PAGES.EMPLOYEE_DETAILS.TITLE')}
            pageDescription={translate('PAGES.EMPLOYEE_DETAILS.DESCRIPTION')}
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
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_NAME')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('name', value)}
                  />
                </Col>
                <Col>
                  <AdvancedSelect
                    value={form.profileType}
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_TYPE')}
                    onChange={(value: string) =>
                      onFormChange('profileType', value)
                    }
                    options={profileType}
                  />
                </Col>
                <Col md={3}>
                  <AdvancedInput
                    value={maskPhone(form.cellphone)}
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_PHONE')}
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
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_EMAIL')}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={(value: string) => onFormChange('email', value)}
                  />
                </Col>

                <Col>
                  <AdvancedSelect
                    value={form.company}
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_COMPANY')}
                    onChange={(value: string) => onFormChange('company', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedInput
                    value={form.password}
                    label={translate('PAGES.EMPLOYEE_DETAILS.LABEL_PASSWORD')}
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
                      'PAGES.EMPLOYEE_DETAILS.LABEL_CONFIRM_PASSWORD'
                    )}
                    placeholder={translate('SHARED.PLACEHOLDER')}
                    onChange={setConfirmPassword}
                    type="password"
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

export default EmployeeDetails;

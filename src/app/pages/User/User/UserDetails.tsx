import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';

import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import { maskPhone } from '@portal/services/masks';
import AdvancedCheckbox from '@portal/components/AdvancedCheckbox/AdvancedCheckbox';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PAGE_TYPE } from '@portal/enum/pageType';
import * as UserActions from '@portal/store/User/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { SaveOutlined } from '@ant-design/icons';

// import { Container } from './styles';

const initialValues: models.UserForm = {
  name: '',
  email: '',
  password: '',
  cellphone: '',
  profileType: 0,
};

const UserDetails: React.FC = () => {
  const [form, setForm] = useState(initialValues);
  const dispatch = useDispatch();
  const [pageType] = useState(getPageType());
  const params = useParams() as { id: string };
  const { pathname } = useLocation();
  const { details } = useReduxState().user;

  const [confirmPassword, setConfirmPassword] = useState<string>('');

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

  const onFormSubmit = () => {};

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
                <Col>
                  <AdvancedCheckbox
                    value={form.profileType}
                    label={translate('PAGES.USER_DETAILS.LABEL_PROFILE_TYPE')}
                    onChange={(value: boolean) =>
                      onFormChange('profileType', value)
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

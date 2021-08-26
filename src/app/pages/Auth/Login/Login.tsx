import { ArrowRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import * as AuthActions from '~/actions/auth';
import * as MessageService from '~/services/message';

import AdvancedButton from '~/components/AdvancedButton/AdvancedButton';
import AdvancedForm from '~/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '~/components/AdvancedInput/AdvancedInput';
import { WL_COMPANY_LOGIN_LOGO } from '~/config/env';
import { translate } from '~/services/i18n';
import { validateEmail } from '~/services/validation';
import { getRouteStackPath } from '@portal/config/routes';

const initialValues: models.AuthRequest = {
  password: '',
  email: '',
};

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialValues);

  const onFormChange = (key: string, value: string) => {
    setForm((prevState: models.AuthRequest) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onFormSubmit = () => {
    if (!form.email || (form.email && !validateEmail(form.email))) {
      return MessageService.error('PAGES.AUTH.LOGIN.ERRORS.INVALID_USERNAME');
    }

    if (!form.password) {
      return MessageService.error('PAGES.AUTH.LOGIN.ERRORS.INVALID_PASSWORD');
    }

    // dispatch(AuthActions.authenticate(form));
    window.location.href = getRouteStackPath('USER', 'REPORT')
  };

  return (
    <div className="login">
      <Helmet>
        <title>Entrar</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <div className="login__form">
              <div className="login__form__inner">
                {/* <Loading /> */}
                <AdvancedForm onSubmit={onFormSubmit}>
                  <Row className="justify-content-center">
                    <Col lg={4}>
                      <Row>
                        <Col>
                         {/* todo improve logo */}
                          {/* <img
                            className="login__form__inner__logo"
                            src={WL_COMPANY_LOGIN_LOGO}
                            alt="login logo"
                          /> */}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="login__form__inner__message">
                            <strong className="login__form__inner__message__title">
                              {translate('PAGES.LOGIN.TITLE')}
                            </strong>
                            <p className="login__form__inner__message__warning">
                              {translate('PAGES.LOGIN.DESCRIPTION')}
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <AdvancedInput
                            className="login__form__input"
                            label={translate('PAGES.LOGIN.FIELDS.EMAIL.LABEL')}
                            placeholder={translate('PAGES.LOGIN.FIELDS.EMAIL.PLACEHOLDER')}
                            value={form.email}
                            onChange={(value: string) => onFormChange('email', value)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <AdvancedInput
                            className="login__form__input"
                            label={translate('PAGES.LOGIN.FIELDS.PASSWORD.LABEL')}
                            placeholder={translate('PAGES.LOGIN.FIELDS.PASSWORD.PLACEHOLDER')}
                            value={form.password}
                            onChange={(value: string) => onFormChange('password', value) }
                            type="password"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="login__form__inner__button">
                            <AdvancedButton
                              endIcon={<ArrowRightOutlined />}
                              text={translate('COMPONENTS.ADVANCED_BUTTON.SIGN_IN')}
                              fullWidth
                              type="submit"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <p className="login__form__inner__bottom">
                            &nbsp;
                            <Link
                              className="login__form__inner__bottom__login"
                              to={translate('PAGES.AUTH.PASSWORD_RECOVERY.URL')}
                            >
                              {translate('COMPONENTS.LINK.FORGOT_PASSWORD')}
                            </Link>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </AdvancedForm>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

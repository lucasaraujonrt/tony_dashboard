import React, { useState } from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import AdvancedForm from '@portal/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '@portal/components/AdvancedInput/AdvancedInput';
import { maskPhone } from '@portal/services/masks';
import AdvancedCheckbox from '@portal/components/AdvancedCheckbox/AdvancedCheckbox';
import AdvancedButton from '@portal/components/AdvancedButton/AdvancedButton';

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

  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
            pageTitle="Usuário"
            pageDescription="Criar usuário"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <AdvancedForm onSubmit={onFormSubmit}>
            <div className="details__form">
              <Row>
                <Col>
                  <AdvancedInput
                    value={form.name}
                    label="Nome do usuário"
                    placeholder="Digite aqui"
                    onChange={(value: string) => onFormChange('name', value)}
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={maskPhone(form.cellphone)}
                    label="Telefone do usuário"
                    placeholder="Digite aqui"
                    onChange={(value: string) =>
                      onFormChange('cellphone', value)
                    }
                  />
                </Col>
                <Col>
                  <AdvancedCheckbox
                    value={form.profileType}
                    label="Administrador"
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
                    label="E-mail do usuário"
                    placeholder="Digite aqui"
                    onChange={(value: string) => onFormChange('email', value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <AdvancedInput
                    value={form.password}
                    label="Senha do usuário"
                    placeholder="Digite aqui"
                    onChange={(value: string) =>
                      onFormChange('password', value)
                    }
                    type="password"
                  />
                </Col>
                <Col>
                  <AdvancedInput
                    value={confirmPassword}
                    label="Confirme a senha"
                    placeholder="Digite aqui"
                    onChange={setConfirmPassword}
                    type="password"
                  />
                </Col>
              </Row>

              <div className="details__form__actions">
                <Row>
                  <Col className="text-right">
                    <AdvancedButton type="submit" text="Salvar" />
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

import React from 'react';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';

// import { Container } from './styles';

const UserDetails: React.FC = () => {
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
    </Container>
  );
};

export default UserDetails;

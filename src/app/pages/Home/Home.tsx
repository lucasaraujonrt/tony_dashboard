import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Result
      status="success"
      title="Bem vindo ao Tony Dashboard"
      subTitle="Comece por aqui"
      extra={
        <Link to="/kanban/detalhes">
          <Button type="primary">Ir para Kanban</Button>
        </Link>
      }
    />
  );
};

export default Home;

import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Desculpa mas essa página não existe"
      extra={
        <Link to="/kanban/detalhes">
          <Button type="primary">Ir para Kanban</Button>
        </Link>
      }
    />
  );
}

export default NotFound;
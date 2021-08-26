import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import UserReport from './UserReport';
import UserDetails from './UserDetails';
import PanelContent from '@portal/components/PanelContent/PanelContent';


const UserStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('USER', 'REPORT')}>
        <PanelContent pageTitle="Lista de usuários" pageDescription="lista de usuarios">
          <UserReport />  
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('USER', 'DETAILS')}/:id`}>
      <PanelContent pageTitle="Criar usuário" pageDescription="Preencha os campos para criar o usúario">
          <UserDetails />
      </PanelContent>
      </Route>
    </Switch>
  );
}

export default UserStack;
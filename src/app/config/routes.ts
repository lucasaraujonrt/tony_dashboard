const routes: models.route[] = [
  {
    id: 'SERVICE_CALL',
    name: 'Chamados',
    route: '/chamado',
    icon: '/assets/svg/panel-sidebar/ic_service_call.svg',
    iconAlt: 'Chamado',
    items: [
      {
        id: 'REPORT',
        name: 'Lista de chamados',
        route: '/lista',
      },
      {
        id: 'SERVICE_CALL_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  {
    id: 'KANBAN',
    name: 'Kanban',
    route: '/kanban',
    hide: true,
    icon: '/assets/svg/panel-sidebar/ic_service_call.svg',
    iconAlt: 'Kanban',
    items: [
      {
        id: 'KANBAN_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  {
    id: 'KPI',
    name: 'KPI',
    route: '/kpi',
    hide: true,
    icon: '/assets/svg/panel-sidebar/ic_service_call.svg',
    iconAlt: 'KPI',
    items: [
      {
        id: 'KPI_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  {
    id: 'USER',
    name: 'PAGES.PANEL.USER.SIDEBAR_TITLE',
    route: '/usuarios',
    icon: '/assets/svg/panel-sidebar/ic_users.svg',
    iconAlt: 'Usuários',
    items: [
      {
        id: 'REPORT',
        name: 'Lista de usuários comuns',
        route: '/lista',
      },
      {
        id: 'USER_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
      {
        id: 'EMPLOYEE_REPORT',
        name: 'Lista de colaboradores',
        route: '/colaboradores/lista',
      },
      {
        id: 'EMPLOYEE_DETAILS',
        name: 'Informações Gerais',
        route: '/colaboradores/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  {
    id: 'COMPANY',
    name: 'Empresas',
    route: '/empresas',
    icon: '/assets/svg/panel-sidebar/ic_company.svg',
    iconAlt: 'Empresas',
    items: [
      {
        id: 'REPORT',
        name: 'Lista de empresas',
        route: '/lista',
      },
      {
        id: 'COMPANY_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  // {
  //   id: 'SECTOR',
  //   name: 'Setores',
  //   route: '/setores',
  //   icon: '/assets/svg/panel-sidebar/ic_sector.svg',
  //   iconAlt: 'Setores',
  //   items: [
  //     {
  //       id: 'REPORT',
  //       name: 'Lista de setores',
  //       route: '/lista',
  //     },
  //     {
  //       id: 'SECTOR_DETAILS',
  //       name: 'Informações Gerais',
  //       route: '/detalhes',
  //       sidebarHidden: true,
  //     },
  //   ],
  // },
];

export const getRoutes = (): models.route[] => routes;

export const getRouteStack = (route: string): models.route =>
  routes.find((o) => o.route === route) as models.route;

export const getStackPath = (stackId: string): string => {
  return `${routes.find((o) => o.id === stackId)?.route}`;
};

export const routeExist = (route: string): boolean => {
  const routeTop = routes.find((o) => route.startsWith(o.route));

  if (!routeTop) {
    return false;
  }
  if (routeTop.route.length === route.length) {
    return false;
  }

  return (
    (routeTop.items.find((o) => `${routeTop.route}${o.route}` === route) &&
      true) ||
    false
  );
};

export const getRouteStackPath = (stackId: string, routeId: string): string => {
  const route = routes.find((o) => o.id === stackId);

  return `${route?.route}${route?.items.find((o) => o.id === routeId)?.route}`;
};

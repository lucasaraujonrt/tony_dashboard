const routes: models.route[] = [
  {
    id: 'USER',
    name: 'PAGES.PANEL.USER.SIDEBAR_TITLE',
    route: '/usuarios',
    icon: '/assets/svg/panel-sidebar/ic_users.svg',
    iconAlt: 'Usuários',
    items: [
      {
        id: 'REPORT',
        name: 'Lista de usuários',
        route: '/lista',
      },
      {
        id: 'USER_DETAILS',
        name: 'Informações Gerais',
        route: '/detalhes',
        sidebarHidden: true,
      },
    ],
  },
  {
    id: 'COMPANY',
    name: 'Empresas',
    route: '/empresas',
    icon: '/assets/svg/panel-sidebar/ic_users.svg',
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
      },
    ],
  },
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

const routes: models.route[] = [
  {
    id: 'DASHBOARD',
    name: 'PAGES.PANEL.DASHBOARD.SIDEBAR_TITLE',
    route: '/dashboard',
    icon: '/assets/svg/panel-sidebar/ic_dashboard.svg',
    iconAlt: 'Dashboard',
    items: [
      {
        id: 'DETAILS',
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

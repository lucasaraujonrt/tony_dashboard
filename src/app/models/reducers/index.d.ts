export as namespace reducers;

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: null;
};

export type AdminReducer = {
  list: models.BaseReport | null;
};

export type UserReducer = {
  list: models.BaseReport | null;
  allUsers: string[];
  details: null;
  me: any;
};

export type CompanyReducer = {
  list: models.BaseReport | null;
  details: null;
  me: any;
};

export type ServiceCallReducer = {
  list: models.BaseReport | null;
  details: null;
  me: any;
};

export type LoadingReducer = {
  amount: number;
};

type rootReducer = {
  admin: AdminReducer;
  auth: AuthReducer;
  user: UserReducer;
  loading: LoadingReducer;
  company: CompanyReducer;
  serviceCall: ServiceCallReducer;
};

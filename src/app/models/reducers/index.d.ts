export as namespace reducers;

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: null,
};

export type AdminReducer = {
  list: models.BaseReport | null;
}

export type UserReducer = {
  list: models.BaseReport | null;
  allUsers: string[];
};

export type LoadingReducer = {
  amount: number;
};

type rootReducer = {
  admin: AdminReducer;
  auth: AuthReducer;
  user: UserReducer;
  loading: LoadingReducer;
};
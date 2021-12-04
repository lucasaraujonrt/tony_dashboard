import { RowModel } from '@material-ui/data-grid';

export as namespace models;

import('./reducers');
import('./advanced-filters');
import('./utils');

export type BaseReport = {
  rows: RowModel[];
  count: number | 0;
};

export type AuthResponse = {
  accessToken: string | null;
  refreshToken: string | null;
  token: string | null;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type PanelSidebar = {
  link?: string;
  name?: string;
  icon?: any;
  isBottom?: boolean;
};

export type routeInner = {
  route: string;
  id: string;
  name: string;
  sidebarHidden?: boolean;
  accessType?: number;
};

export type route = {
  route: string;
  icon: string;
  iconAlt: string;
  name: string;
  id: string;
  items: routeInner[];
  accessType?: number;
  hide?: boolean;
};

export type PaginationResponse<T> = {
  row: T[];
  count: number;
};

export type SearchFilter = {
  status?: string | null | undefined;
  search: string;
};

export type Add = {
  name: string;
  email: string;
  phone: string;
};

export type PageType = {
  ADD: number;
  EDIT: number;
};

export type DaysOfWeek = {
  ONE: number;
  TWO: number;
  THREE: number;
  FOUR: number;
  FIVE: number;
  SIX: number;
  SEVEN: number;
};

export type UserPageType = {
  ADMIN: number;
  USER: number;
};

export type passwordRecovery = {
  email: string;
  recoveryToken: string;
  pass: string;
};

export type uploadFile = {
  base64: string;
  extension: string;
  lastModified: Number;
  lastModifiedDate: Date;
  name: string;
  size: Number;
  type: string;
  uuid: string;
  webkitRelativePath: string;
};

export type User = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
};

export interface UserForm {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  profileType: number;
  cep: string;
  address: string;
  number: string;
  district: string;
  city: string;
  uf: string;
}

export interface EmployeeForm {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  company: string;
  profileType: string;
}

export interface CompanyForm {
  name: string;
  fantasyName: string;
  cellphone: string;
  email: string;
  address: string;
  number: string;
  cep: string;
  district: string;
  city: string;
  uf: string;
  area: string;
  cnpj: string;
}

export interface ServiceCallForm {
  priority: string;
  status: string;
  description: string;
  sectorId: string;
  clientId: string;
  employeeId: string;
}

export interface SectorForm {
  name: string;
}

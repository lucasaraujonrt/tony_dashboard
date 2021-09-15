import { ProfileTypeEnum } from '@portal/enum/profileType';

interface ProfileType {
  name: string;
  value: ProfileTypeEnum;
}

export const profileType: ProfileType[] = [
  { name: 'Colaborador', value: ProfileTypeEnum.EMPLOYEE },
  { name: 'Administrador da empresa', value: ProfileTypeEnum.COMPANY_ADMIN },
  { name: 'Administrador', value: ProfileTypeEnum.ADMIN },
];

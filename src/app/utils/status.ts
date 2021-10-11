import { StatusId } from '@portal/enum/statusId';

interface Status {
  name: string;
  value: StatusId;
}

export const status: Status[] = [
  { name: 'Criado', value: StatusId.CREATING },
  { name: 'Pendente', value: StatusId.PENDING },
  { name: 'Em progresso', value: StatusId.WORK_IN_PROGRESS },
  { name: 'Finalizado', value: StatusId.DONE },
];

export const getCurrentStatus = (currentStatus: number) =>
  status.find((o) => o.value === currentStatus);

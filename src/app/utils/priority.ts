import { PriorityId } from '@portal/enum/priorityId';

interface Priority {
  name: string;
  value: PriorityId;
}

export const priority: Priority[] = [
  { name: 'Urgente', value: PriorityId.URGENT },
  { name: 'Normal', value: PriorityId.NORMAL },
  { name: 'Baixa', value: PriorityId.NOT_URGENT },
];

import { PriorityId } from '@portal/enum/priorityId';

interface Priority {
  name: string;
  value: PriorityId;
  colors?: string;
}

export const priority: Priority[] = [
  { name: 'Urgente', value: PriorityId.URGENT },
  { name: 'Normal', value: PriorityId.NORMAL },
  { name: 'Baixa', value: PriorityId.NOT_URGENT },
];

export const priorityColors: Priority[] = [
  { name: 'Urgente', colors: '#D41E00', value: PriorityId.URGENT },
  { name: 'Normal', colors: '#F5631A', value: PriorityId.NORMAL },
  { name: 'Baixa', colors: '#0E86D4', value: PriorityId.NOT_URGENT },
];

export const getCurrentPriority = (getCurrentPriority: number) =>
  priority.find((o) => o.value === getCurrentPriority);

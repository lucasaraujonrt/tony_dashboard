export as namespace advancedFilterModels;

export interface IBaseFilter {
  pageSize: number | 10;
  limit?: number | 10;
  page: number | 1;
  orderBy: string | 'createdAt';
  sort?: 'asc' | 'desc';
  offset?: number | 0;
  isDESC?: boolean;
}

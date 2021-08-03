export as namespace utils;

export type SearchParams = {
  name: string, 
  placeholder: string,
  type: number, 
  defaultValue: string,
  maxRange?: number,
  format?: string,
  options?: any,
}
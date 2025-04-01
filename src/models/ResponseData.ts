export interface ResponseData<T> {
  list: Array<T>;
  pageInfo: PageInfo;
  error: string;
}

export interface PageInfo {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
  pageSize: number;
  totalRows: number;
}

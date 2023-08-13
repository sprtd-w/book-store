export interface Article {
  id: string,
  bookId: string,
  description: string,
  filter?: string,
  sortOrder?: string,
  pageNumber?: string,
  pageSize?: string,
  duration?: string,
  seqNo?: string,
}

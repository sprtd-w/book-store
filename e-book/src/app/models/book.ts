export interface Book {
  id: string;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: string;
  articlesCount: number;
}


export function sortCoursesBySeqNo(c1: Book, c2: Book) {
  return c1.seqNo - c2.seqNo;
}

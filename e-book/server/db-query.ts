import { BOOKS, LESSONS, USERS } from "./db";

export function findBookById(bookId: number) {
  return Object.values(BOOKS as Array<{ id: number }>).find(book => book.id === bookId);
}

export function findArticlesByBookId(bookId: number) {
  return Object.values(LESSONS).filter(item => item.bookId == bookId);
}

export function auth(email: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}

import { BOOKS, ARTICLES, USERS } from "./db";

export function findBookById(id: number) {
  return Object.values(BOOKS as Array<{ id: number }>).find(book => book.id === id);
}

export function findArticlesByBookId(bookId: number) {
  return Object.values(ARTICLES).filter(item => item.bookId == bookId);
}

export function auth(email: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}

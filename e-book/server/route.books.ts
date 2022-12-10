import { Request, Response } from "express";
import { BOOKS } from "./db";
import { findBookById } from "./db-query";

export function getBooks(req: Request, res: Response) {
  res.status(200).json({ payload: Object.values(BOOKS) });
}
export function getBookById (req: Request, res: Response) {
  const { id: bookId } = req.params;
  const course = findBookById(+bookId);

  res.status(200).json(course);
}

export function saveBookById(req: Request, res: Response) {
  const { id: bookId } = req.params;
  const payload = req.body;

  const newBook = {
    ...BOOKS[bookId],
    ...payload
  };

  BOOKS[bookId] = newBook;
  console.log('new book added: ', newBook);

  res.status(200).json(BOOKS[bookId]);
}

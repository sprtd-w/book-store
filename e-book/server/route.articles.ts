import { Request, Response } from "express";
import { ARTICLES } from "./db";
import { findArticlesByBookId } from "./db-query";

export function getArticlesByParams(req: Request, res: Response) {
  const queryParams = req.query as {
    id: string,
    bookId: string,
    description: string,
    filter?: string,
    sortOrder?: string,
    pageNumber?: string,
    pageSize?: string,
    duration?: string,
  };

  const bookId = queryParams.bookId;
  const filterQuery = queryParams?.filter || '';
  const sortOrder = queryParams?.sortOrder || '';
  const pageNumber = parseInt(queryParams?.pageNumber || '', 10) || 0;
  const pageSize = parseInt(queryParams?.pageSize || '', 10) || 0;

  let articles = bookId ? findArticlesByBookId(+bookId) : Object.values(ARTICLES);

  if (filterQuery) {
    articles = articles.filter(article => article.description.trim().toLowerCase().search(filterQuery.toLowerCase()) >= 0)
  }

  if (sortOrder === "desc") {
    articles = articles.reverse();
  }

  const startPage = pageNumber * pageSize;
  const paginated = pageSize ? articles.slice(startPage, startPage + pageSize) : articles;

  res.status(200).json({ payload: paginated });
}

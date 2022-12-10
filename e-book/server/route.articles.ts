import { Request, Response } from "express";
import { LESSONS } from "./db";
import { findArticlesByBookId } from "./db-query";

export function getArticlesByParams(req: Request, res: Response) {
  const queryParams = req.query as {
    courseId: string,
    filter?: string,
    sortOrder?: string,
    pageNumber?: string,
    pageSize?: string
  };

  const courseId = queryParams.courseId;
  const filterQuery = queryParams?.filter || '';
  const sortOrder = queryParams?.sortOrder || '';
  const pageNumber = parseInt(queryParams?.pageNumber || '', 10) || 0;
  const pageSize = parseInt(queryParams?.pageSize || '', 10) || 0;

  let articles = courseId ? findArticlesByBookId(+courseId) : Object.values(LESSONS);

  if (filterQuery) {
    articles = articles.filter(lesson => lesson.description.trim().toLowerCase().search(filterQuery.toLowerCase()) >= 0)
  }

  if (sortOrder === "desc") {
    articles = articles.reverse();
  }

  const startPage = pageNumber * pageSize;
  const paginated = articles.slice(startPage, startPage + pageSize);

  res.status(200).json({ payload: paginated });
}

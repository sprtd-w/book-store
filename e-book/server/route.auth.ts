import { Request, Response } from "express";
import { USERS } from "./db";
import { auth } from "./db-query";

export function authUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = auth(email, password);

  if (user) {
     res.status(200).json({ email: user.email });
  } else {
    res.status(403);
  }
}

import { NextFunction, Request, Response } from "express";
import { registerModel } from "../models/register.model.js";
export default function registerValidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = registerModel.validate(req.body);
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  next();
}

import { Request, Response } from 'express';
import { createUser } from '../services/users-service/index.js';
import httpStatus from 'http-status';
export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await createUser(email, password);
    if (user) {
      return res.status(httpStatus.OK).send(user);
    }
  } catch (error) {
    if (error.name === 'DuplicatedEmailError') {
      return res.sendStatus(httpStatus.CONFLICT);
    } else {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }
}

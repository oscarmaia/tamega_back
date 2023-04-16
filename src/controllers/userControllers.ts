import userService from '../services/users-service/index.js';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userService.createUser(email, password);
    if (user) {
      return res.status(httpStatus.OK).send(user);
    }
  } catch (error) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error);
    } else {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }
}

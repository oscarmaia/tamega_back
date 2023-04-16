import { Request, Response } from 'express';
import httpStatus, { UNAUTHORIZED } from 'http-status';
import authService from '../services/auth-service/index.js';

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    await authService.signIn(email, password);
    return res.sendStatus(200);
  } catch (error) {
    if (error.name === 'InvalidCredentialsError') {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

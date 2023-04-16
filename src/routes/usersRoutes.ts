import { Router } from 'express';
import registerValidate from '../middlewares/registerValidate.js';
import { signUp } from '../controllers/userControllers.js';

const usersRouter = Router();
usersRouter.post('/', registerValidate, signUp);

export { usersRouter };

import { Router } from 'express';
import loginValidate from '../middlewares/loginValidate.js';
import { signIn } from '../controllers/authControllers.js';

const authRouter = Router();
authRouter.post('/', loginValidate, signIn);

export { authRouter };

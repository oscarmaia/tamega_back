import { Router } from 'express';
import registerValidate from '../middlewares/registerValidate.js';
import { signUp } from '../controllers/userControllers.js';

const router = Router();
router.post('/sign-up', registerValidate, signUp);

export default router;

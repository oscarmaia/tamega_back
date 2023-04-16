import Joi from 'joi';

export const loginModel = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

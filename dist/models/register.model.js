import Joi from "joi";
export const registerModel = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    _password: Joi.any().valid(Joi.ref("password")).required(),
});

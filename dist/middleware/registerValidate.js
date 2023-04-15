import { registerModel } from "../models/register.model.js";
export default function registerValidate(req, res, next) {
    const { error } = registerModel.validate(req.body);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    next();
}

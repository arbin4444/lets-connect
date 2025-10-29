import Joi from "joi";

export const ConnectSignInSchema = Joi.object({
    userNameEmail : Joi.string()
})
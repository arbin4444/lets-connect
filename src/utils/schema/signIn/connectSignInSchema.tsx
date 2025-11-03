import Joi from "joi";

export const ConnectSignInSchema = Joi.object({
    userNameEmail : Joi.string()
    .min(3)
    .max(254)
    .required()
    .messages({
        "string.empty" : "Please enter you username or email"
    }),

    password : Joi.string()
    .min(8)
    .max(30)
    .required()
    .messages({
        "string.empty" : "Please enter your password",
        "string.min" : "Password must have min. 3 character",
        "string.max" : "Password can have max. 30 character"
    })
})
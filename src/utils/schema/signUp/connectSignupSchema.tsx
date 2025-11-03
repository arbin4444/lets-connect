import Joi from "joi";

export const ConnectSignUpSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(20).required()
    .messages({
      "string.empty" : "Username is required",
      "string.alphanum" : "Username must only contain number and alphabet",
      "string.min": "Minimum 3 character is required",
      "string.max": "Maximum 20 character is required"
    }),

  email: Joi.string()
    .email({
      allowUnicode: false,
      ignoreLength: false,
      allowFullyQualified: true,
    })
    .required()
    .messages({
      "string.empty":"PLease enter valid email",
    }),

  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+=-]).{8,30}$"
      )
    )
    .required()
    .messages({
      "string.empty":"Password is required"
    })
});

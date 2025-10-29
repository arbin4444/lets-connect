import Joi from "joi";

export const ConnectSignUpSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(20).required(),

  email: Joi.string()
    .email({
      allowUnicode: false,
      ignoreLength: false,
      allowFullyQualified: true,
    })
    .required(),

  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+=-]).{8,30}$"
      )
    )
    .required(),
});

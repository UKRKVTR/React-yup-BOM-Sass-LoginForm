import * as yup from "yup";

export const REG_EXP = yup.object({
  name: yup
    .string()
    .min(2)
    .max(12)
    .matches(/^[A-Z][a-z]*$/, "the name must contain one uppercase")
    .matches(/^[a-zA-Z]+$/, "the name must not contain numbers"),
  surname: yup
    .string()
    .min(1)
    .max(12)
    .matches(/^[A-Z][a-z]*$/, "the surname must contain one uppercase")
    .matches(/^[a-zA-Z]+$/, "the surname must not contain numbers"),
  mail: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least 1 lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least 1 uppercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least 1 number")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least 1 special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

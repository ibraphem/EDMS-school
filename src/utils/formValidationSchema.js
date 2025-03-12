import * as yup from "yup";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(emailRegex, "Invalid email address"),
  password: yup.string().required("Password is required"),
});

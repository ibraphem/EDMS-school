import * as yup from "yup";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signInSchema = yup.object().shape({
  email: yup.string().required("Email field is required"),
  password: yup.string().required("Password field is required"),
});
3;

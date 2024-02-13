import * as Yup from "yup";

export const signUpSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("*Please Enter Your First Name"),
    lname: Yup.string().min(2).max(25).required("*Please Enter Your Last Name"),
    email: Yup.string().email().required("*Please Enter A Valid Email Address"),
    password: Yup.string().min(8).max(25).required("*Please Enter Your Password"),
    cpassword: Yup.string().min(8).max(25).required("*Please Confirm Your Password").oneOf([Yup.ref('password'), null], '*Password Must Match'),

});

export const loginSchema = Yup.object({
    email: Yup.string().email().required("*Please Enter A Valid Email Address"),
    password: Yup.string().min(8).max(25).required("*Please Enter Your Password"),
})
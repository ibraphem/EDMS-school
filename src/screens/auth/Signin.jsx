"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "@/components/customs/CustomInput";
import { signInSchema } from "@/utils/formValidationSchema";
import { Form, Formik } from "formik";

const Signin = () => {

  
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center md:justify-start md:items-start md:grid grid-cols-8 h-screen w-full relative">
      <h3 className="font-bold text-3xl text-primary z-1 absolute top-6 left-6 md:hidden">
        EDMS
      </h3>

      <div className="h-full hidden md:block col-span-3 relative text-white px-12 py-16">
        <Image
          src="/auth-side.png"
          fill
          alt="auth bg"
          className="object-fill"
        />
        <div className="relative  flex flex-col">
          <h3 className="font-bold text-4xl  z-1 ">EDMS</h3>

          <h1 className="font-bold md:text-[40px] lg:text-[60px] leading-[72px] relative z-1 mt-20">
            Electronic Document Management System
          </h1>
        </div>
      </div>
      <div className="md:col-span-5 px-6 py-10 text-center md:text-left md:py-16 md:px-20 w-[80%] md:w-[70%] mt-8 border-primary border-2 md:border-0 rounded-lg">
        <p className="font-bold mb-2">Login to your account</p>
        <p
          className="text-input
        "
        >
          Enter your email below to access your account.
        </p>

        <div className="mt-10">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={signInSchema}
          >
            {({
              errors,
              touched,
              handleBlur,
              handleChange,
              values,
              isSubmitting,
            }) => (
              <Form>
                <CustomInput
                  placeholder="Enter Email Address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email}
                  error={errors?.email}
                  touched={touched?.email}
                />
                <CustomInput
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.password}
                  error={errors?.password}
                  touched={touched?.password}
                />
                <Button className="w-full py-6 mt-2">Login</Button>
              </Form>
            )}
          </Formik>
          <p
            className="text-input mt-3
        "
          >
            Don’t remember your password?{" "}
            <Link href="" className="text-blue-500">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;

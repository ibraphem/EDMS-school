"use client";
import CustomInput from "@/components/customs/CustomInput";
import React from "react";
import { Form, Formik } from "formik";
import CustomSelect from "@/components/customs/CustomSelect";
import { departments, designations, ministries, units } from "@/data/app";
import { Button } from "@/components/ui/button";
import { createUser } from "@/services/userService";

const UserManagement = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    unitId: "",
    roleId: "",
    designationId: "",
  };

  const handleSubmit = async (values) => {
    let res = await createUser(values);
      //  SnackbarUtils.success("Login Successful");
    console.log("res", res);
  };

  return (
    <div className="px-10">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        //   validationSchema={signInSchema}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          values,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
        }) => (
          <Form>
            <div class="grid grid-cols-3 gap-6">
              <CustomInput
                name={"firstName"}
                placeholder="Enter First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.firstName}
                error={errors?.firstName}
                touched={touched?.firstName}
              />

              <CustomInput
                name={"lastName"}
                placeholder="Enter Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.lastName}
                error={errors?.lastName}
                touched={touched?.lastName}
              />

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
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.phoneNumber}
                error={errors?.phoneNumber}
                touched={touched?.phoneNumber}
              />

              <CustomSelect
                placeholder="Select Department"
                label={"Department"}
                options={departments}
                name="departmentId"
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={(selectedOption) => {
                  setFieldValue("departmentId", selectedOption?.id);
                }}
                onBlur={() => setFieldTouched("departmentId", true)}
                error={errors.departmentId}
                touched={touched.departmentId}
                initialValue={departments?.find(
                  (opt) => opt.id === values?.departmentId
                )}
              />

              <CustomSelect
                placeholder="Select Unit"
                label={"Unit"}
                options={units}
                name="unitId"
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={(selectedOption) => {
                  setFieldValue("unitId", selectedOption?.id);
                }}
                onBlur={() => setFieldTouched("unitId", true)}
                error={errors.unitId}
                touched={touched.unitId}
                initialValue={units?.find((opt) => opt.id === values?.unitId)}
              />

              <CustomSelect
                label={"designationId"}
                placeholder="Select Designation"
                options={designations}
                name="designationId"
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={(selectedOption) => {
                  setFieldValue("designationId", selectedOption?.id);
                }}
                onBlur={() => setFieldTouched("designationId", true)}
                error={errors.designationId}
                touched={touched.designationId}
                initialValue={designations?.find(
                  (opt) => opt.id === values?.designationId
                )}
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

              <CustomInput
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.confirmPassword}
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
              />

              <Button className="w-[200px] py-6">Create User</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserManagement;

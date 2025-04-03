"use client";
import CustomInput from "@/components/customs/CustomInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Form, Formik } from "formik";
import CustomSelect from "@/components/customs/CustomSelect";
import {
  departments,
  designations,
  ministries,
  roles,
  units,
} from "@/data/app";
import { Button } from "@/components/ui/button";
import { createUser } from "@/services/userService";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import SnackbarUtils from "../components/customs/CustomNotification";

const UserManagement = () => {
  const router = useRouter();
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
    const payload = {
      // userName: `${values?.firstName}_${values?.lastName}`,
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
      phoneNumber: values?.phoneNumber,
      unitId: values?.unitId,
      roleId: values?.roleId,
      designationId: values?.designationId,
    };
    let res = await createUser(payload);

    SnackbarUtils.warning(res);
    router.back();
  };

  return (
    <Card className="justify-self-center px-3">
      <CardHeader>
        <CardTitle className="flex gap-x-8">
          {" "}
          <ArrowLeft
            onClick={() => router.back()}
            className="h-5 w-5 cursor-pointer"
          />{" "}
          Create New User
        </CardTitle>
      </CardHeader>
      <CardContent>
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
                  placeholder="Select Ministry"
                  label={"Ministry"}
                  options={ministries}
                  name="ministryId"
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={(selectedOption) => {
                    setFieldValue("ministryId", selectedOption?.id);
                  }}
                  onBlur={() => setFieldTouched("departmentId", true)}
                  error={errors.ministryId}
                  touched={touched.ministryId}
                  initialValue={ministries?.find(
                    (opt) => opt.id === values?.ministryId
                  )}
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
                  label={"Designation"}
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

                <CustomSelect
                  label={"Role"}
                  placeholder="Select Role"
                  options={roles}
                  name="roleId"
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={(selectedOption) => {
                    setFieldValue("roleId", selectedOption?.id);
                  }}
                  onBlur={() => setFieldTouched("designationId", true)}
                  error={errors.roleId}
                  touched={touched.roleId}
                  initialValue={roles?.find((opt) => opt.id === values?.roleId)}
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

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-[200px] py-6"
                >
                  {isSubmitting ? "Please, Wait..." : "Create User"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default UserManagement;

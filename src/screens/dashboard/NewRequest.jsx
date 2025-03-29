"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomInput from "@/components/customs/CustomInput";
import { Form, Formik } from "formik";
import CustomTextarea from "@/components/customs/CustomTextarea";
import CustomUpload from "@/components/customs/CustomUpload";

const NewRequest = () => {
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const initialValues = {
    title: "",
    description: "",
  };

  console.log("file", file);

  const handleSubmit = () => {};

  return (
    <div className="w-[100%]">
      <Card className="lg:w-[50%] justify-self-center px-3">
        <CardHeader>
          <CardTitle>Make New Request</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            // validationSchema={signInSchema}
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
                  placeholder="Enter Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email}
                  error={errors?.email}
                  touched={touched?.email}
                />
                <CustomTextarea
                  placeholder="Write Memo"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.password}
                  error={errors?.password}
                  touched={touched?.password}
                />

                <div className="mt-4 mb-4">
                  <CustomUpload
                    file={file}
                    setFile={(value) => setFile(value)}
                    //   error={errors.file}
                    acceptableFiles="PDF or Doc file"
                    fileTypeValidation={{
                      "application/pdf": [".pdf"],
                      "application/msword": [".doc"],
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                        [".docx"],
                    }}
                  />
                </div>

                <div className="mt-4 mb-4">
                  <CustomUpload
                    file={file2}
                    multi={true}
                    setFile={(value) => setFile2(value)}
                    //   error={errors.file}
                    acceptableFiles="PDF or Doc file"
                    fileTypeValidation={{
                      "application/pdf": [".pdf"],
                      "application/msword": [".doc"],
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                        [".docx"],
                    }}
                    placeholder="Additional/Supporting Documents"
                  />
                </div>
                <Button type="submit" className="w-full py-6 mt-2">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewRequest;

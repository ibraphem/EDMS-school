"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomInput from "@/components/customs/CustomInput";
import { Form, Formik } from "formik";
import CustomTextarea from "@/components/customs/CustomTextarea";
import CustomUpload from "@/components/customs/CustomUpload";
import { createRequest } from "@/services/requestService";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import SnackbarUtils from "../../components/customs/CustomNotification";

const NewRequest = () => {
  const router = useRouter();
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState([]);
  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = async (values) => {
    values.document = file;
    if (file2?.length > 0) {
      values.supportingDocuments = file2;
    }
    const res = await createRequest(values);
    console.log("res", res);
    if (res?.status) {
      SnackbarUtils.success(res?.message);
      router.back();
    } else {
      SnackbarUtils.error(res?.message);
    }
  };

  return (
    <div className="w-[100%]">
      <Card className="lg:w-[50%] justify-self-center px-3">
        <CardHeader>
          <CardTitle className="flex gap-x-8">
            {" "}
            <ArrowLeft
              onClick={() => router.back()}
              className="h-5 w-5 cursor-pointer"
            />{" "}
            Make New Request
          </CardTitle>
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
                  value={values?.title}
                  error={errors?.title}
                  touched={touched?.title}
                  name="title"
                />
                <CustomTextarea
                  placeholder="Write a description..."
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.description}
                  // error={errors?.description}
                  // touched={touched?.description}
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 mt-2"
                >
                  {isSubmitting ? "Please, wait..." : "Create Request"}
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

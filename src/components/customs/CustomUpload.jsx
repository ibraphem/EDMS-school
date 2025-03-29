import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { CircleX, CloudUpload } from "lucide-react";

const CustomUpload = ({
  file,
  fileName,
  setFile,
  isRequired = true,
  label = "",
  multi = false,
  error,
  acceptableFiles,
  fileTypeValidation,
  onFileRemove,
  placeholder = "Upload File",
  disabled = false,
}) => {
  const FILE_SIZE = 100 * 1024 * 1024;
  const [fileError, setFileError] = useState("");
  const [showUpload, setshowUpload] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: fileTypeValidation,
    multiple: multi,
    onDropRejected: (fileRejections) => {
      setFileError(`${fileRejections[0]?.file?.name} is an Invalid File Type`);
    },
    onDrop: (acceptedFiles) => {
      let validFile = true;

      acceptedFiles.forEach((file) => {
        if (file.size > FILE_SIZE) {
          setFileError(`${file.name} is too large. Maximum size is 100MB.`);
          validFile = false;
          return;
        }
      });

      if (validFile) {
        if (multi) {
          setFile((prevFiles) => [...prevFiles, ...acceptedFiles]);
        } else {
          setFile(acceptedFiles[0]);
        }
      }
    },
  });

  useEffect(() => {
    if (file) {
      setshowUpload(false);
    }
  }, [file]);

  const handleRemove = (index) => {
    if (multi) {
      const newFiles = file.filter((_, i) => i !== index);
      setFile(newFiles);
      if (onFileRemove) {
        onFileRemove(newFiles);
      }
    } else {
      setFile(null);
      if (onFileRemove) {
        onFileRemove(null);
      }
    }
  };

  return (
    <>
      <div className={disabled ? "cursor-not-allowed" : "cursor-pointer"}>
        {multi || showUpload || (!file && !fileName) ? (
          <>
            <div
              {...getRootProps()}
              className={`mt-1 py-3 border border-1 border-primary flex justify-center items-center ${
                disabled ? "pointer-events-none" : ""
              }`}
              style={{ borderRadius: 10, backgroundColor: "#EEECFF" }}
            >
              <input {...getInputProps()} style={{ display: "none" }} />{" "}
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <div>
                  <div className="flex justify-center mb-2">
                    <CloudUpload size={10} color="#5747E6" />
                  </div>
                  <p className="text-center text-primary font-[600] text-md">
                    {placeholder}
                  </p>
                  <div className="text-center font-[500] text-sm">
                    {acceptableFiles}{" "}
                  </div>
                </div>
              )}
            </div>
            {fileError || error ? (
              <p className="mt-0 text-sm text-red-600 font-medium">
                {fileError ? fileError : error}
              </p>
            ) : null}
          </>
        ) : null}
        {(file && file?.length !== 0) || (fileName && fileName?.length > 0) ? (
          <>
            {multi ? (
              <div
                className="p-3 mt-2 "
                style={{ border: "2px dashed5747e6", borderRadius: 10 }}
              >
                {file?.map((fileItem, index) => (
                  <div
                    key={index}
                    className="bg-primary text-white mb-2"
                    style={{ width: "100%", borderRadius: 5, fontSize: "12px" }}
                  >
                    <div className="flex p-2">
                      <CircleX
                        onClick={() => handleRemove(index)}
                        className="h-5 w-5"
                      />{" "}
                      &nbsp; &nbsp; {fileItem.name}
                    </div>
                  </div>
                ))}

                {fileName?.map((fileItem, index) => (
                  <div
                    key={index}
                    className="bg-primary text-white mb-2"
                    style={{ width: "100%", borderRadius: 5, fontSize: "12px" }}
                  >
                    <div className="p-2">
                      <CircleX
                        onClick={() => handleRemove(index)}
                        className="h-5 w-5"
                      />{" "}
                      &nbsp; &nbsp; {fileItem.fileName}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {!showUpload && (
                  <div
                    className="p-3 mt-2"
                    style={{ border: "2px dashed #5747e6", borderRadius: 10 }}
                  >
                    <div
                      className="bg-primary text-white mb-2"
                      style={{ width: "100%", borderRadius: 5 }}
                    >
                      <div className="flex p-2">
                        <CircleX
                          onClick={() => {
                            setshowUpload(true);
                            handleRemove();
                          }}
                          className="h-5 w-5"
                        />{" "}
                        &nbsp; &nbsp; {fileName ? fileName : file?.name}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default CustomUpload;

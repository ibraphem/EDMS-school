import React from "react";
import { Textarea } from "@/components/ui/textarea";

const CustomTextarea = ({
  className,
  placeholder = "Type your message here.",
  name,
  onChange,
  onBlur,
  value,
  readOnly,
}) => {
  return (
    <Textarea
      placeholder={placeholder}
      className={`w-full border-input-fore  min-h-20 ${className}`}
      name={name}
      readOnly={readOnly}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomTextarea;

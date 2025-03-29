import React from "react";
import { Textarea } from "@/components/ui/textarea";

const CustomTextarea = ({
  className,
  placeholder = "Type your message here.",
}) => {
  return (
    <Textarea
      placeholder={placeholder}
      className={`w-full border-input-fore  min-h-20 ${className}`}
    />
  );
};

export default CustomTextarea;

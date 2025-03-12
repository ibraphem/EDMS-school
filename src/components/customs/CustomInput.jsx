"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CustomInput = ({
  isRequired = true,
  error = "",
  label,
  type = "text",
  placeholder = "Enter here",
  disabled = false,
  pattern = undefined,
  name,
  onChange,
  onBlur,
  value,
  touched,
  maxlength,
  readOnly = false,
  minlength,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full mb-7">
      <Input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={`w-full py-6 pr-12 border-input-fore ${className}`}
        onKeyDown={(e) => {
          if (type === "number") {
            if (e.key === "e") {
              e.preventDefault();
            }
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
          }
        }}
        onPaste={(e) => {
          const pastedText = e.clipboardData.getData("text");
          if (type === "number") {
            if (pastedText.includes("e")) {
              e.preventDefault();
            }
          }
        }}
        name={name}
        readOnly={readOnly}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        disabled={disabled}
        pattern={pattern}
      />

      {type === "password" && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </Button>
      )}
      {touched && error && (
        <p className="mt-0 text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;

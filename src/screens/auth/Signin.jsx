import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signin = () => {
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
          <Input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-10"
          />
          <Link href="/forgot-password">
            <Button className="w-full">Login</Button>
          </Link>
          <p
            className="text-input mt-2
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

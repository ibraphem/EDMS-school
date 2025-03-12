import { FileTabs } from "@/components/dashboard-components/FileTabs";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const AllFiles = () => {
  return (
    <div className="flex justify-between text-xs">
      <div className="pb-[100px] flex-grow p-3">
        <h3 className="font-bold text-lg mb-4">Requests / Tasks Details</h3>
        <div className="flex bg-[#FDB10029] p-4 rounded-2xl items-center mb-2">
          <CircleCheck className="mr-5 text-[#FDB100] " size={35} />
          <div className="text-input text-sm">
            <p className="mb-2">
              Request status:{" "}
              <span className="font-semibold">Awaiting author’s response</span>
            </p>
            <p className="font-semibold">
              Your request has been sent to the author. You will be notified
              once it has been actioned.
            </p>
          </div>
        </div>

        <div className=" bg-gradient-to-l from-primary to-black text-white p-4 rounded-2xl  mb-2">
          <div className="flex w-full items-center justify-between mb-5">
            <p>Document</p>
            <p>MIT/ABC/25/VOL1/007</p>
          </div>
          <p className="font-bold mb-5">
            Request for approval for entrepreneurship training for secondary
            schools
          </p>
          <div className="flex w-full items-center justify-between">
            <p>Type Procurement</p>
            <p>Created on: Feb 16th, 2024</p>
          </div>
        </div>

        <div className="  p-4 rounded-2xl  mb-2">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold ">File information</h4>
            <Button className="text-[#E20010] bg-[#E2001029] px-1 py-0.5 text-xs flex rounded-3xl">
              <CircleX className="mr-1" size={15} />
              Close
            </Button>
          </div>
          <div className="flex items-center justify-between py-4 px-2 border-b text-input">
            <p>
              <span className="inline-block w-[100px] mr-4">Created By:</span>{" "}
              <span className="font-semibold">Comfort Chukwu</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-4 px-2 border-b text-input">
            <p>
              <span className="inline-block w-[100px] mr-4">MDA:</span>{" "}
              <span className="font-semibold">Ministry of Education</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-4 px-2 border-b text-input">
            <p>
              <span className="inline-block w-[100px] mr-4">Description:</span>{" "}
              <span className="font-semibold">
                Request for approval for entrepreneurship training for secondary
                schools
              </span>
            </p>
          </div>
          <div className="p-4 border text-input rounded-2xl my-4">
            <p className="font-semibold mb-2 text-black">Memo</p>
            <div className="flex items-center ">
              <Image src="/pdf.png" width={40} height={50} alt="pdf" />
              <p className="ml-4">
                <span className="font-semibold mb-1 inline-block">
                  Request for approval for entrepreneurship training for
                  secondary schools
                </span>{" "}
                <br />
                <span>
                  16 Feb, 2025 at 09:25 am{" "}
                  <span className="inline-block h-1 w-1 rounded-full bg-input"></span>{" "}
                  1.5MB
                </span>
              </p>
              <Button className="text-[#6359DE] bg-[#6359DE29] px-1 py-0.5 text-xs flex rounded-3xl ml-auto">
                <Eye className="mr-1" size={15} />
                View Memo
              </Button>
            </div>
          </div>

          <p className="font-semibold mt-4 text-black">Supporting Documents</p>

          {documents.map((document, index) => (
            <div key={index} className="py-4 px-2 border-b text-input ">
              <div className="flex items-center ">
                <Image
                  src={"/" + document.type + ".png"}
                  width={40}
                  height={50}
                  alt="pdf"
                />
                <p className="ml-4">
                  <span className="font-semibold mb-1 inline-block">
                    Request for approval for entrepreneurship training for
                    secondary schools
                  </span>{" "}
                  <br />
                  <span>
                    {document.date}{" "}
                    <span className="inline-block h-1 w-1 rounded-full bg-input"></span>{" "}
                    {document.size}
                  </span>
                </p>
                <Button className="text-[#6359DE] bg-[#6359DE29] px-1 py-0.5 text-xs flex rounded-3xl ml-auto">
                  <Eye className="mr-1" size={15} />
                  View Document
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[350px] border-t border-l rounded-tl-2xl p-4 pr-0">
        <h3 className="font-bold text xl mb-4">Requests / Tasks Details</h3>
        <FileTabs />
      </div>
    </div>
  );
};

export default AllFiles;

const documents = [
  {
    name: "Staff lunch list.xls",
    type: "xls",
    size: "2.8MB",
    date: "16 Feb, 2025 at 09:25 am",
  },
  {
    name: "STEM for schools.docx",
    type: "docx",
    size: "1.5MB",
    date: "16 Feb, 2025 at 09:25 am",
  },
  {
    name: "Staff lunch list.xls",
    type: "xls",
    size: "2.8MB",
    date: "16 Feb, 2025 at 09:25 am",
  },
  {
    name: "STEM for schools.docx",
    type: "docx",
    size: "1.5MB",
    date: "16 Feb, 2025 at 09:25 am",
  },
];

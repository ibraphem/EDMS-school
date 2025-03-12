"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import TableComponent from "@/components/dashboard-components/TableComponent";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { DatePicker } from "@/components/dashboard-components/DatePicker";

const Requests = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleViewDetails = (row) => {
    console.log("clicked");
    // router.push(
    //   `/dashboard/workbench/request-details/${row.id}`
    // );
  };

  const handleRowClick = (row) => {
    handleViewDetails(row);
  };

  return (
    <div className="pb-[100px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text xl">Good Morning Oreoluwa,</h3>
        <Button>Start Now</Button>
      </div>
      <div className="flex justify-between items-center w-full mb-10">
        <div className="flex items-center">
          <p className="font-bold text-black mr-4">Filter by:</p>
          <Select>
            <SelectTrigger className="w-min h-8 text-sm mr-4">
              <SelectValue placeholder="Request Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Request Type</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-min h-8 text-sm mr-4">
              <SelectValue placeholder="Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Action</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-min h-8 text-sm mr-4">
              <SelectValue placeholder="Request Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Status</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-min h-8 text-sm mr-4">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Status</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DatePicker />
        </div>
        <div className="border-2 border-[#E917DB] text-[#E917DB] bg-[#E917DB]/30 py-1 px-4 rounded-2xl">
          <span>10 New Tasks</span> <span>8 Tasks in view</span>
        </div>
      </div>
      <TableComponent
        data={requests}
        columns={columns}
        onRowClick={handleRowClick}
        className="min-w-full divide-y divide-gray-200"
        headerClassName="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        rowClassName="bg-white hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
        cellClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      />
    </div>
  );
};

export default Requests;

const columns = [
  {
    key: "title",
    header: "Title",
    render: (row) => {
      return <span className="text-sm text-input">{row.title}</span>;
    },
  },
  {
    key: "requestType",
    header: "Request Type",
    render: (row) => {
      return <span className="text-sm text-input">{row.requestType}</span>;
    },
  },
  {
    key: "requestId",
    header: "Request ID",
    render: (row) => {
      return <span className="text-sm text-input">{row.requestId}</span>;
    },
  },
  {
    key: "dateInitiated",
    header: "Date Initiated",
    render: (row) => {
      return <span className="text-sm text-input">{row.dateInitiated}</span>;
    },
  },
  {
    key: "status",
    header: "Status",
    render: (row) => {
      return (
        <span
          className={`px-3 py-1 text-sm rounded-lg ${
            row.status === "Pending"
              ? "text-[#FDB100] bg-[#FDB100]/50 "
              : row.status === "Completed"
              ? "text-[#257F0D] bg-[#257F0D]/50"
              : "text-[#E20010] bg-[#E20010]/50"
          }`}
        >
          {row.status}
        </span>
      );
    },
  },
];

const requests = [
  {
    title: "Request for staff lunch",
    requestType: "Expenditure Clearance",
    requestId: "MIT/24/MOF/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Pending",
  },
  {
    title: "Request for infrastructural repairs",
    requestType: "Warrant Request",
    requestId: "MIT/24/MOI/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Rejected",
  },
  {
    title: "Request for entrepreneurship training",
    requestType: "Payment Request",
    requestId: "MIT/24/MOS/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Pending",
  },
  {
    title: "Request for inter-ministry games",
    requestType: "Payment Request",
    requestId: "MIT/24/MOS/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Completed",
  },
  {
    title: "Request for staff lunch",
    requestType: "Expenditure Clearance",
    requestId: "MIT/24/MOF/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Pending",
  },
  {
    title: "Request for infrastructural repairs",
    requestType: "Warrant Request",
    requestId: "MIT/24/MOI/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Rejected",
  },
  {
    title: "Request for entrepreneurship training",
    requestType: "Payment Request",
    requestId: "MIT/24/MOS/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Pending",
  },
  {
    title: "Request for inter-ministry games",
    requestType: "Payment Request",
    requestId: "MIT/24/MOS/C0123456",
    dateInitiated: "25/FEB/2024",
    status: "Completed",
  },
];

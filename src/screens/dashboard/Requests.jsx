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
import React, { useEffect, useMemo, useState } from "react";
import { DatePicker } from "@/components/dashboard-components/DatePicker";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequests } from "@/redux/slices/requestSlice";
import CustomDataTable from "@/components/customs/CustomDataTable";

const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((state) => state?.request);
  const { requests, requestLoading } = requestData;
  const [selectedDate, setSelectedDate] = useState(null);
  const handleViewDetails = (row) => {
    console.log("clicked");
    // router.push(
    //   `/dashboard/workbench/request-details/${row.id}`
    // );
  };

  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  const handleRowClick = (row) => {
    handleViewDetails(row);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Request Id",
        accessor: "fileId",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date Initiated",
        accessor: "createdOn",
      },
      {
        Header: "Status",
        accessor: (row) => `${row.status}`,
        Cell: ({ value }) => {
          return (
            <span
              className={`px-3 py-1 text-sm rounded-lg ${
                value === "pending"
                  ? "text-[#FDB100] bg-[#FDB100]/50 "
                  : value === "completed"
                  ? "text-[#257F0D] bg-[#257F0D]/50"
                  : "text-[#E20010] bg-[#E20010]/50"
              }`}
            >
              {value}
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="pb-[100px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text xl">Good Morning Oreoluwa,</h3>
        <Link href="/dashboard/requests/new" className="text-blue-500">
          <Button>Start Now</Button>
        </Link>
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
      <CustomDataTable
        data={requests}
        columns={columns}
        loading={requestLoading}
      />
    </div>
  );
};

export default Requests;

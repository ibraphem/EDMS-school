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
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/dashboard-components/DatePicker";
import { Plus } from "lucide-react";
import { InfoTabs } from "@/components/dashboard-components/InfoTabs";

const Files = () => {
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
    <div className="flex justify-between">
      <div className="pb-[100px] mr-5">
        <div className="flex justify-between items-center w-full mb-6">
          <h3 className="font-bold text xl">Files</h3>
        </div>
        <div className="flex justify-between items-center w-full mb-10">
          <div className="flex items-center">
            <p className="font-bold text-black mr-4">Filter by:</p>
            <Select>
              <SelectTrigger className="w-min h-8 text-sm mr-4">
                <SelectValue placeholder="File name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">File name</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <DatePicker />
          </div>
          <Button className="items">
            <Plus className="mr-4" />
            Add New File
          </Button>
        </div>
        <TableComponent
          data={data}
          columns={columns}
          onRowClick={handleRowClick}
          className="min-w-full divide-y divide-gray-200"
          headerClassName="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          rowClassName="bg-white hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
          cellClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        />
      </div>
      <div className="w-[300px] border-t border-l rounded-tl-2xl p-4">
        <h3 className="font-bold text xl mb-4">Info</h3>
        <InfoTabs />
      </div>
    </div>
  );
};

export default Files;

const columns = [
  {
    key: "fileName",
    header: "File Name",
    render: (row) => {
      return (
        <>
          <span className="font-medium text-sm text-gray-900">
            {row.fileName}
          </span>
          ;
          <span className="text-sm text-input block mt-2">{row.requestId}</span>
        </>
      );
    },
  },
  {
    key: "dateCtreated",
    header: "Date Created",
    render: (row) => {
      return <span className="text-sm text-input">{row.dateCreated}</span>;
    },
  },
  {
    key: "modifiedBy",
    header: "Modified By",
    render: (row) => {
      return <span className="text-sm text-input ">{row.modifiedBy}</span>;
    },
  },
];

const data = [
  {
    fileName: "Procurement for STEM class equipment",
    modifiedBy: "Oreoluwa George",
    requestId: "MIT/24/MOF/C0123456",
    dateCreated: "25/FEB/2024",
    status: "Pending",
  },
  {
    fileName: "Procurement for STEM class equipment",
    modifiedBy: "Oreoluwa George",
    requestId: "MIT/24/MOF/C0123456",
    dateCreated: "25/FEB/2024",
    status: "Pending",
  },
  {
    fileName: "Procurement for STEM class equipment",
    modifiedBy: "Oreoluwa George",
    requestId: "MIT/24/MOF/C0123456",
    dateCreated: "25/FEB/2024",
    status: "Pending",
  },
  {
    fileName: "Procurement for STEM class equipment",
    modifiedBy: "Oreoluwa George",
    requestId: "MIT/24/MOF/C0123456",
    dateCreated: "25/FEB/2024",
    status: "Pending",
  },
  {
    fileName: "Procurement for STEM class equipment",
    modifiedBy: "Oreoluwa George",
    requestId: "MIT/24/MOF/C0123456",
    dateCreated: "25/FEB/2024",
    status: "Pending",
  },
];

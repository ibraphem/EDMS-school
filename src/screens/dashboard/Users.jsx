"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/userSlice";
import CustomDataTable from "@/components/customs/CustomDataTable";

const Users = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);
  const { users, userLoading } = userData;
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

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
    ],
    []
  );

  return (
    <div className="pb-[100px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text xl">Good Morning Oreoluwa,</h3>
        <Link href="/dashboard/users/new" className="text-blue-500">
          <Button>Add User</Button>
        </Link>
      </div>

      <CustomDataTable data={users} columns={columns} loading={userLoading} />
    </div>
  );
};

export default Users;

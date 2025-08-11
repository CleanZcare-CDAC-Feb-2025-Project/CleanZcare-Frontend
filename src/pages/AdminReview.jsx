import React from "react";
import { Review } from "./Review";
import { UserTable } from "../components/Table/UserTable ";

export const AdminReview = () => {
  return (
    <div className="flex flex-col gap-y-4">
       <UserTable />
    </div>
  );
};

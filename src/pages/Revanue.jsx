import React from "react";
import { UserTable } from "../components/Table/UserTable ";
import UserTable1 from "../components/Table/domey";

export const Revenue = () => {
  const dummyData = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "some where", key: "2" },
  ];
  return (
    <div>
      <UserTable />
    </div>
  );
};

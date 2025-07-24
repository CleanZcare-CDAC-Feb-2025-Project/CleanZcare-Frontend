import React from 'react';
import Table from 'rc-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Operations',
    key: 'operations',
    render: () => <a href="#">Delete</a>,
  },
];

const UserTable1 = ({ data }) => {
  return <Table columns={columns} data={data} />;
};

export default UserTable1;

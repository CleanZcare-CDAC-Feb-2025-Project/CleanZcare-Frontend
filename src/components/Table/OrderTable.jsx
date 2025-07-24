import React from 'react'
import { Table } from './Table'
import TableWrapper from './TableWrapper'

export const OrderTable = () => {
  return (
    <TableWrapper title={"Recent Orders"}>
        <Table />
    </TableWrapper>
  )
}

import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    
    <div className="flex">
      <Sidebar role={"professional"}/>
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-6">
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  )
}

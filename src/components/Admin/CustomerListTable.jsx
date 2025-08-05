// src/components/CustomerListTable.jsx
import React from 'react';

const CustomerListTable = ({ customers, onViewProfile }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Total Services</th>
            <th className="px-4 py-2 border">Last Service</th>
            <th className="px-4 py-2 border">Rating</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id} className="text-center">
                <td className="px-4 py-2 border">{customer.name}</td>
                <td className="px-4 py-2 border">{customer.phone}</td>
                <td className="px-4 py-2 border">{customer.totalServices}</td>
                <td className="px-4 py-2 border">{customer.lastServiceDate}</td>
                <td className="px-4 py-2 border">{customer.rating}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => onViewProfile(customer)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerListTable;

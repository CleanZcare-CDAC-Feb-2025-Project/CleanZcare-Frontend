import React, { useState } from 'react';


import CustomerListTable from '../../components/Admin/CustomerListTable';
import CustomerProfileModal from '../../components/Admin/CustomerProfileModal';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const dummyCustomers = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    totalServices: 5,
    lastServiceDate: '2025-07-15',
    rating: 4.5,
    email: 'john@example.com',
    address: '123 Main St, NY'
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    totalServices: 3,
    lastServiceDate: '2025-07-10',
    rating: 4.9,
    email: 'jane@example.com',
    address: '456 Broadway, NY'
  }
];

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = dummyCustomers.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>

      {/* Inline Search Bar */}
    <div className="relative w-full max-w-md mb-4">
    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by name or phone"
    className="w-full pl-10 pr-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>


      {/* Customer List Table */}
      <CustomerListTable
        customers={filteredCustomers}
        onViewProfile={setSelectedCustomer}
      />

      {/* Customer Profile Modal */}
      {selectedCustomer && (
        <CustomerProfileModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
};

export default Customers;

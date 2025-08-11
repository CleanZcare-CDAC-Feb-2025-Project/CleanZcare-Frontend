import React, { useState } from 'react';
import axios from 'axios';
import { createServiceWithSubServices } from '../../Service/showCategoryService';

export default function AddServiceModal({ isOpen, onClose }) {
  const [parentService, setParentService] = useState({
    title: '',
    price: '',
    duration: '',
    description: ''
  });

  const [subServices, setSubServices] = useState([]);

  const handleAddSubService = () => {
    setSubServices([...subServices, { title: '', price: '', duration: '', description: '' }]);
  };

  const handleSubServiceChange = (index, field, value) => {
    const updated = [...subServices];
    updated[index][field] = value;
    setSubServices(updated);
  };

  const handleSubmit = async () => {
    const payload = { parentService, subServices };
    try {
      await createServiceWithSubServices(payload);
      onClose();
    } catch (err) {
      alert('Failed to create service. Please check console.');
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Add Parent Service</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2"
            placeholder="Title"
            onChange={e => setParentService({ ...parentService, title: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Price"
            onChange={e => setParentService({ ...parentService, price: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Duration"
            onChange={e => setParentService({ ...parentService, duration: e.target.value })}
          />
          <input
            className="border p-2 col-span-2"
            placeholder="Description"
            onChange={e => setParentService({ ...parentService, description: e.target.value })}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Sub Services</h3>
        {subServices.map((sub, index) => (
          <div key={index} className="border border-gray-300 rounded p-4 mt-4">
            <h4 className="font-medium mb-2">Sub Service {index + 1}</h4>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="border p-2"
                placeholder="Title"
                onChange={e => handleSubServiceChange(index, 'title', e.target.value)}
              />
              <input
                className="border p-2"
                placeholder="Price"
                onChange={e => handleSubServiceChange(index, 'price', e.target.value)}
              />
              <input
                className="border p-2"
                placeholder="Duration"
                onChange={e => handleSubServiceChange(index, 'duration', e.target.value)}
              />
              <input
                className="border p-2"
                placeholder="Description"
                onChange={e => handleSubServiceChange(index, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleAddSubService}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Sub-service
          </button>
          <div>
            <button
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

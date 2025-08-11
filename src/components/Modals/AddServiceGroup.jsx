import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { toast } from "sonner"; // Sonner toast
import {
  createServiceGroup,
  getAllServices,
} from "../../Service/showCategoryService";

export default function CreateServiceGroupModal({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [displayOrder, setDisplayOrder] = useState("");
  const [iconPath, setIconPath] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);

  // Fetch services when modal opens
  useEffect(() => {
    if (isOpen) {
      getAllServices()
        .then((data) => setServices(Array.isArray(data) ? data : []))
        .catch((err) => {
          console.error(err);
          setServices([]); // fallback
        });
    }
  }, [isOpen]);
  // if(services && services.length<= 0 ){
  //     toast.error("Failed to get services");
  // }

  const handleServiceSelection = (id) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (selectedServiceIds.length === 0) {
  //     toast.error("For adding group there must be a service");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("displayOrder", displayOrder);
  //   if (iconPath) formData.append("icon", iconPath);
  //   selectedServiceIds.forEach((id) => formData.append("serviceIds", id));

  //   try {
  //     const result = await createServiceGroup(formData);
  //     toast.success("Service group added successfully");
  //     console.log("Service group added:", result);
  //     onClose();
  //   } catch (error) {
  //     toast.error("Failed to add service group");
  //     console.error("Error adding service group:", error);
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!displayOrder || isNaN(displayOrder)) {
    toast.error("Please provide a valid display order");
    return;
  }

  if (!selectedServiceIds || selectedServiceIds.length === 0) {
    toast.error("For adding group there must be a service");
    return;
  }

  try {
    const result = await createServiceGroup({
      title,
      displayOrder,
      iconPath,
      serviceIds: selectedServiceIds,
    });
    toast.success("Service group added successfully");
    console.log("Service group added:", result);
    onClose();
  } catch (error) {
    toast.error("Failed to add service group");
    console.error("Error adding service group:", error);
  }
};

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Add Service Group
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Display Order */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Display Order
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(e.target.value ? parseInt(e.target.value, 10) : 0)}
                required
              />
            </div>

            {/* Icon Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Icon Path (File Upload) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="w-full"
                accept="image/*"
                onChange={(e) => setIconPath(e.target.files[0])}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Services
              </label>
              <div className="border p-2 rounded max-h-40 overflow-y-auto">
                {services && services.length > 0 ? (
                  services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <input
                        type="checkbox"
                        value={service.id}
                        checked={selectedServiceIds.includes(service.id)}
                        onChange={() => handleServiceSelection(service.id)}
                      />
                      <span>{service.title}</span>
                    </label>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No services available</p>
                )}
              </div>
              {services.length <= 0 && (
                <p className="text-sm text-red-500">Services Should be Added Before ServiceGroup</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={selectedServiceIds.length === 0}
                className={`px-4 py-2 rounded text-white ${
                  selectedServiceIds.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Add Group
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

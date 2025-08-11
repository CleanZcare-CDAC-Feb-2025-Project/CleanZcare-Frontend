import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { createCategory, getServiceGroup } from "../../Service/showCategoryService";

export default function CreateCategoryModal({ isOpen, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const [serviceGroups, setServiceGroups] = useState([]);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const res = await getServiceGroup(); // this is likely { data: [...], status: 200 }
        console.log("Fetched service groups response:", res);

        if (res?.data && Array.isArray(res.data)) {
          setServiceGroups(res.data);
        } else {
          setServiceGroups([]);
        }
      } catch (error) {
        console.error("Error fetching service groups:", error);
      }
    }

    fetchGroups();
  }, []);

  const onSubmit = async (data) => {
    try {
        console.log("passing Data",data);
        
      await createCategory(data).then((data)=>{
        console.log("ReturnData",data);
        
      });
      onClose();
      reset();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 space-y-4">
          <Dialog.Title className="text-lg font-semibold">
            Create Category
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium">Title</label>
              <input
                type="text"
                {...register("title")}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                {...register("description")}
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <div>
              <label className="block font-medium">Attach Service Groups</label>
              <div className="space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                {serviceGroups.map((group) => (
                  <div key={group.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={group.id}
                      {...register("group")}
                      id={`group-${group.id}`}
                      className="accent-blue-600"
                    />
                    <label htmlFor={`group-${group.id}`} className="text-sm">
                      {group.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

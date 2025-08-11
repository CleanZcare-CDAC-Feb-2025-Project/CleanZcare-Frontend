import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, useFieldArray } from "react-hook-form";

export default function AddCouponModal() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      code: "",
      title: "",
      subTitle: "",
      discription: "",
      minamt: "",
      discount: "",
      expirationDate: "",
      active: true,
      terms: {
        title: "Terms And Conditions",
        data: [{ text: "" }],
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "terms.data",
  });

  const onSubmit = (data) => {
    console.log("Coupon Data: ", data);
    setIsOpen(false);
    reset();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Coupon
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-100 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-11/12 bg-black bg-opacity-30">
          <Dialog.Panel className="bg-white w-full max-w-xl p-6 rounded shadow-lg space-y-4">
            <Dialog.Title className="text-xl font-semibold">Add Coupon</Dialog.Title>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <input {...register("code")} placeholder="Code" className="w-full border px-3 py-2 rounded" required/>
              <input {...register("title")} placeholder="Title" className="w-full border px-3 py-2 rounded" required/>
              <input {...register("subTitle")} placeholder="Subtitle" className="w-full border px-3 py-2 rounded" required/>
              <input {...register("discription")} placeholder="Description" className="w-full border px-3 py-2 rounded" required/>
              <input type="number" {...register("minamt")} placeholder="Minimum Amount" className="w-full border px-3 py-2 rounded" required/>
              <input type="number" {...register("discount")} placeholder="Discount" className="w-full border px-3 py-2 rounded" required/>
              <input type="datetime-local" {...register("expirationDate")} className="w-full border px-3 py-2 rounded" required/>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register("active")} required/>
                <label>Active</label>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium mb-2">Terms & Conditions</h3>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2 mb-2">
                    <input
                      {...register(`terms.data.${index}.text`)}
                      placeholder="Term Text"
                      className="flex-1 border px-2 py-1 rounded"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ text: "", termGroup: "" })}
                  className="text-sm text-blue-600 mt-2"
                >
                  + Add Term
                </button>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

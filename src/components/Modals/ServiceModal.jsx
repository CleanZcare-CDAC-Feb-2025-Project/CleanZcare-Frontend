import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  createShowCategory,
  getCategories,
  getPages,
} from "../../Service/showCategoryService";

export default function ShowCategoryModal({ isOpen, onClose }) {
  const { register, control, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      showCategoryTitle: "",
      selectedCategory: "",
      selectedPage: "",
      showCategoryImages: null,
      subShowCategories: [],
      extraModalBanner: null,
      extraImages: [],
      extraImageCategories: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subShowCategories",
  });

  const watchCategory = watch("selectedCategory");
  const extraImages = watch("extraImages");
  const watchsubShowCategories = watch("subShowCategories");

  const onSubmit = (data) => {
    data.showCategoryImages = data.showCategoryImages || [];
    console.log("Submitting form data:", data);

    createShowCategory(data)
      .then((res) => {
        console.log("Success", res.data);
        reset();
        onClose();
      })
      .catch((err) => {
        console.error("Error creating show category:", err);
      });
  };
  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryRes = await getCategories();
        const pageRes = await getPages();

        setCategories(categoryRes.data); // assuming response has `data`
        setPages(pageRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded-xl bg-white p-6 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6">
          <Dialog.Title className="text-2xl font-semibold text-gray-800">
            Add Show Category
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Main Fields */}
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                {...register("showCategoryTitle")}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter title"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Select Category</label>
              <select
                {...register("selectedCategory")}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">-- Select Category --</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}{" "}
                    {/* or category.name, depending on your data */}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Select Page</label>
              <select
                {...register("selectedPage")}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">-- Select Page --</option>
                {pages.map((page) => (
                  <option key={page.id} value={page.id}>
                    {page.title}{" "}
                    {/* or page.name, depending on your API response */}
                  </option>
                ))}
              </select>
            </div>

            {/* Main Image */}
            <div>
              <label className="block font-medium mb-1">
                Upload Main Image
              </label>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setValue("showCategoryImages", file);
                }}
                className="w-full border rounded-lg px-3 py-2 bg-white file:bg-blue-100 file:text-blue-700"
              />
            </div>

            {/* Sub Categories */}
            {!watchCategory && (
              <div className="border-t pt-4 space-y-4">
                <h3 className="text-lg font-semibold">Sub Show Categories</h3>

                {fields.map((item, index) => {
                  const currentImages = watch(
                    `subShowCategories.${index}.images`
                  );

                  return (
                    <div
                      key={item.id}
                      className="border p-4 rounded-lg bg-gray-50 relative space-y-4"
                    >
                      <button
                        type="button"
                        className="absolute top-2 right-2 text-red-600"
                        onClick={() => remove(index)}
                      >
                        ❌
                      </button>

                      <div>
                        <label className="block mb-1 font-medium">
                          Subcategory Title
                        </label>
                        <input
                          {...register(`subShowCategories.${index}.title`)}
                          className="w-full border rounded-lg px-3 py-2"
                          placeholder="Enter title"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Select Category
                        </label>
                        <select
                          {...register(`subShowCategories.${index}.category`)}
                          className="w-full border rounded-lg px-3 py-2"
                        >
                          <option value="">-- Select Category --</option>
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.title}{" "}
                              {/* or cat.name, based on your API response */}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Main Image */}
                      <div>
                        <label className="block font-medium mb-1">
                          Upload Main Image for category
                        </label>
                        <input
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setValue(
                                `subShowCategories.${index}.mainImage`,
                                file
                              );
                            }
                          }}
                          className="w-full border rounded-lg px-3 py-2 bg-white file:bg-blue-100 file:text-blue-700"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Upload Modal Banner
                        </label>
                        <input
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setValue(
                                `subShowCategories.${index}.modalBanner`,
                                file
                              );
                            }
                          }}
                          className="w-full border rounded-lg px-3 py-2 bg-white file:bg-purple-100 file:text-purple-700"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Upload Multiple Images
                        </label>
                        <input
                          type="file"
                          multiple
                          onChange={(e) => {
                            setValue(
                              `subShowCategories.${index}.images`,
                              Array.from(e.target.files)
                            );
                          }}
                          className="w-full border rounded-lg px-3 py-2 bg-white file:bg-green-100 file:text-green-700"
                        />
                      </div>

                      {/* Category for each uploaded image */}
                      {currentImages?.length > 0 && (
                        <div className="space-y-2">
                          <p className="font-semibold">
                            Category for each image:
                          </p>
                          {currentImages.map((img, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                              <p className="truncate w-48">{img.name}</p>
                              <select
                                {...register(
                                  `subShowCategories.${index}.imageCategories.${idx}`
                                )}
                                className="p-2 border rounded w-full"
                              >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                  <option key={cat.id} value={cat.id}>
                                    {cat.title}{" "}
                                    {/* or cat.name based on your API structure */}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    append({
                      title: "",
                      category: "",
                      images: [],
                      modalBanner: null,
                      imageCategories: [],
                    })
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  + Add SubCategory
                </button>
              </div>
            )}
            {!watchCategory && watchsubShowCategories?.length === 0 && (
              <div>
                {/* ✅ Extra Modal Banner Upload */}
                <div>
                  <label className="block mb-1 font-medium">
                    Upload Modal Banner
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setValue(`extraModalBanner`, file);
                      }
                    }}
                    className="w-full border rounded-lg px-3 py-2 bg-white file:bg-purple-100 file:text-purple-700"
                  />
                </div>

                {/* ✅ Extra Multiple Images Upload */}
                <div>
                  <label className="block mb-1 font-medium">
                    Upload Multiple Images for Modal
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      setValue("extraImages", Array.from(e.target.files));
                    }}
                    className="w-full border rounded-lg px-3 py-2 bg-white file:bg-green-100 file:text-green-700"
                  />
                </div>

                {/* ✅ Category for each uploaded extra image */}
                {extraImages?.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-semibold">Category for each image:</p>
                    {extraImages.map((img, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <p className="truncate w-48">{img.name}</p>
                        <select
                          {...register(`extraImageCategories.${idx}`)}
                          className="p-2 border rounded w-full"
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end pt-4 border-t">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
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

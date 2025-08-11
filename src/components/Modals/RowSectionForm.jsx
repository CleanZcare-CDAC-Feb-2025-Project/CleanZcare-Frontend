import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { getCategories } from "../../Service/showCategoryService";
import { toast } from "sonner";
import { createRow } from "../../Service/RowSection";

export default function CreateSliderModal({ isOpen, onClose }) {
  const [type, setType] = useState("Sliders"); // match dropdown options
  const [formData, setFormData] = useState({
    index: "",
    type: "Sliders",
    data: { title: "", data: [] },
    images: [],
  });
  const [categories, setCategories] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const currencyOptions = [
    "INR",
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "HKD",
    "NZD",
  ];

  const currencyToCountry = {
    USD: "US",
    INR: "IN",
    EUR: "EU",
    GBP: "GB",
    JPY: "JP",
    AUD: "AU",
    CAD: "CA",
    CHF: "CH",
    CNY: "CN",
    HKD: "HK",
    NZD: "NZ",
  };

  const getCurrencyFlag = (currencyCode) => {
    const countryCode =
      currencyToCountry[currencyCode] || currencyCode.slice(0, 2);
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((c) => 127397 + c.charCodeAt())
    );
  };

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  // Utility: Update item in nested array inside formData.data.data
  const updateDataItem = (index, updatedFields) => {
    setFormData((prev) => {
      const updatedData = [...prev.data.data];
      updatedData[index] = { ...updatedData[index], ...updatedFields };
      return { ...prev, data: { ...prev.data, data: updatedData } };
    });
  };

  // Utility: Update image item
  const updateImageItem = (index, updatedFields) => {
    setFormData((prev) => {
      const updatedImages = [...prev.images];
      updatedImages[index] = { ...updatedImages[index], ...updatedFields };
      return { ...prev, images: updatedImages };
    });
  };

  const addItemToData = () => {
  let newItem;
  if (type === "Sliders1") {
    newItem = {
      title: "",
      image: null,
      rating: null,      // null instead of ""
      reviews: 0,
      price: null,       // null instead of ""
      currency: "USD",
      category: null,    // null instead of ""
    };
  } else if (type === "Sliders") {
    newItem = {
      title: "",
      image: null,
      category: null,    // null instead of ""
    };
  } else if (type === "Sliders2") {
    newItem = {
      title: "",
      image: null,
      category: null,    // null instead of ""
    };
  } else if (type === "Sliders3") {
    newItem = {
      title: "",
      image: null,
    };
  }

  setFormData((prev) => ({
    ...prev,
    data: {
      ...prev.data,
      data: [...(prev.data.data || []), newItem],
    },
  }));
};


  const removeDataItem = (index) => {
    setFormData((prev) => {
      const updated = [...(prev.data.data || [])];
      updated.splice(index, 1);
      return { ...prev, data: { ...prev.data, data: updated } };
    });
  };

  const addImageItem = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, { file: null, category: "" }],
    }));
  };

  const removeImageItem = (index) => {
    setFormData((prev) => {
      const updated = [...prev.images];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.index) {
    toast.error("Index is required.");
    return;
  }
  if (formData.type === "Sliders2" && formData.images.length === 0) {
    toast.error("Please add at least one image.");
    return;
  }

  setSubmitting(true);
  const fd = new FormData();

  // Append simple fields
  fd.append("index", formData.index);
  fd.append("type", formData.type);

  // Append nested RowSectionDataRequest fields (assuming formData.data is an object, NOT a map)
  if (formData.data) {
    fd.append("data.title", formData.data.title || "");

    if (Array.isArray(formData.data.data)) {
      formData.data.data.forEach((slide, i) => {
        fd.append(`data.data[${i}].title`, slide.title || "");
        fd.append(`data.data[${i}].rating`, slide.rating ?? "");
        fd.append(`data.data[${i}].reviews`, slide.reviews ?? "");
        fd.append(`data.data[${i}].price`, slide.price ?? "");
        fd.append(`data.data[${i}].currency`, slide.currency || "");
        fd.append(`data.data[${i}].category`, slide.category ?? "");

        if (slide.image) {
          fd.append(`data.data[${i}].image`, slide.image);
        }
      });
    }
  }

  // Append images list (for Sliders2 type)
  if (type === "Sliders2") {
  if (Array.isArray(formData.images)) {
    formData.images.forEach((img, idx) => {
      if (img.file) fd.append(`images[${idx}].file`, img.file);
      fd.append(`images[${idx}].category`, img.category || "");
    });
  }
}

  // Debug print all FormData entries
  for (let [key, value] of fd.entries()) {
    console.log(key, value);
  }

  try {
    await toast.promise(createRow(fd), {
      loading: "Saving...",
      success: "Slider saved successfully!",
      error: "Failed to save slider.",
    });
    onClose();
  } catch (error) {
    console.error(error);
    toast.error("Failed to save slider.");
  } finally {
    setSubmitting(false);
  }
};


  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Create Slider
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Index */}
            <div>
              <label className="block font-medium">Index (Order)</label>
              <input
                type="number"
                value={formData.index}
                onChange={(e) =>
                  setFormData({ ...formData, index: e.target.value })
                }
                className="border p-2 w-full rounded"
                required
              />
            </div>

            {/* Type */}
            <div>
              <label className="block font-medium">Type</label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setFormData({
                    ...formData,
                    type: e.target.value,
                    data: { title: "", data: [] },
                  });
                }}
                className="border p-2 w-full rounded"
              >
                <option value="Sliders">Sliders</option>
                <option value="Sliders1">Sliders1</option>
                <option value="Sliders2">Sliders2</option>
                <option value="Sliders3">Sliders3</option>
              </select>
            </div>

            {/* Sliders0 */}
            {type === "Sliders" && (
              <>
                <div>
                  <label className="block font-medium">Title</label>
                  <input
                    type="text"
                    value={formData.data.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        data: { ...formData.data, title: e.target.value },
                      })
                    }
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>
                {formData.data.data?.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    {/* Image file input */}
                    <input
                      type="file"
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].image = e.target.files[0];
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 flex-1 rounded"
                    />

                    {/* Category select */}
                    <select
                      value={item.category || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].category = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeDataItem(idx)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addItemToData}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Add Item
                </button>
              </>
            )}

            {/* Sliders1 */}
            {type === "Sliders1" && (
              <>
                <div>
                  <label className="block font-medium">Title</label>
                  <input
                    type="text"
                    value={formData.data.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        data: { ...formData.data, title: e.target.value },
                      })
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>
                {formData.data.data?.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-2 gap-2 border p-2 rounded"
                  >
                    <input
                      type="text"
                      placeholder="Item title"
                      value={item.title || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].title = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    />
                    <input
                      type="file"
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].image = e.target.files[0];
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Rating"
                      value={item.rating || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].rating = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Reviews"
                      value={item.reviews || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].reviews = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={item.price || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].price = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    />
                    <select
                      value={item.currency || "USD"}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].currency = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    >
                      {currencyOptions.map((cur) => (
                        <option key={cur} value={cur}>
                          {getCurrencyFlag(cur)} {cur}
                        </option>
                      ))}
                    </select>
                    <select
                      value={item.category || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].category = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded col-span-2"
                      onClick={() => removeArrayItem("data", idx)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addItemToData}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Add Item
                </button>
              </>
            )}

            {/* Sliders2 */}
            {type === "Sliders2" && (
              <>
                {formData.images?.map((img, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const updated = [...formData.images];
                        updated[idx] = {
                          ...updated[idx],
                          file, // always store file here
                          category: updated[idx]?.category || "",
                        };
                        setFormData({ ...formData, images: updated });
                      }}
                      className="border p-2 flex-1 rounded"
                    />
                    <select
                      value={img?.category || ""}
                      onChange={(e) => {
                        const updated = [...formData.images];
                        updated[idx] = {
                          ...updated[idx],
                          file: updated[idx]?.file || null,
                          category: e.target.value,
                        };
                        setFormData({ ...formData, images: updated });
                      }}
                      className="border p-2 rounded"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeImageItem(idx)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      images: [
                        ...formData.images,
                        { file: null, category: "" },
                      ],
                    })
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Add Image
                </button>
              </>
            )}

            {/* Sliders3 */}
            {type === "Sliders3" && (
              <>
                <div>
                  <label className="block font-medium">Title</label>
                  <input
                    type="text"
                    value={formData.data.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        data: { ...formData.data, title: e.target.value },
                      })
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>
                {formData.data.data?.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Item title"
                      value={item.title || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].title = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 flex-1 rounded"
                    />
                    <input
                      type="file"
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].image = e.target.files[0];
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 flex-1 rounded"
                    />

                    {/* ADD THIS: Category select */}
                    <select
                      value={item.category || ""}
                      onChange={(e) => {
                        const updated = [...formData.data.data];
                        updated[idx].category = e.target.value;
                        setFormData({
                          ...formData,
                          data: { ...formData.data, data: updated },
                        });
                      }}
                      className="border p-2 rounded"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeDataItem(idx)} // or removeArrayItem("data", idx) if you have that util
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addItemToData}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Add Item
                </button>
              </>
            )}

            {/* Actions */}
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
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

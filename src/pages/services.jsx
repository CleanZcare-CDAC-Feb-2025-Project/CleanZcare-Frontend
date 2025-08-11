import React, { useEffect, useState } from "react";
import { ServicesTable } from "../components/Table/Services";
import ShowCategoryModal from "../components/Modals/ServiceModal";
import CreateCategoryModal from "../components/Modals/categoryModal";
import AddServiceGroupModal from "../components/Modals/AddServiceGroup";
import AddServiceModal from "../components/Modals/AddService";
import AddCouponModal from "../components/Modals/AddCoupanModal";
import CreateSliderModal from "../components/Modals/RowSectionForm";

export const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicOpen, setServiceOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSliderModalOpen, setIsSliderModalOpen] = useState(false);

  return (
    <div>
      <>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          + Add Show Category
        </button>
        <>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            + Add Category
          </button>

          <CreateCategoryModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            // serviceGroups={serviceGroups}
            // onSubmitCategory={handleCreateCategory}
          />
          <div>
            <button
              onClick={() => setServiceOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Service Group
            </button>

            <AddServiceGroupModal
              isOpen={servicOpen}
              onClose={() => setServiceOpen(false)}
            />
          </div>
          <div className="p-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add New Service
            </button>

            <AddServiceModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
          <div>
            <AddCouponModal />
          </div>
          
            <div>
              <button
                onClick={() => setIsSliderModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Open Create Slider Modal
              </button>

              <CreateSliderModal
                isOpen={isSliderModalOpen} // ✅ Boolean, not undefined
                onClose={() => setIsSliderModalOpen(false)}
              />
            </div>
        </>

        <ShowCategoryModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </>
      <ServicesTable />
    </div>
  );
};

import React, { useState } from "react";
import Modal from "../Modals/modal";
import { Link } from "react-router-dom";
import Modal1 from "../Modals/modal1";
import { useEffect } from "react";

const Categorycard = (prop) => {
  //   useEffect(() => {
  //   console.log("Categorycard mounted");
  //   return () => {
  //     console.log("Categorycard unmounted");
  //   };
  // }, []);

  console.log("prop`````", prop);
  const [showModal, setShowModal] = useState(false);
  const { title, image } = prop.data;
  // alert(showModal);
  const handelClose = () => {
    // alert("called")

    setShowModal(false);

    // to learn ==>>
    //React Event Handling, Component Unmounting on Navigation, and Avoiding Conflicting State Updates on Route Transition
  };

  return (
    <div className="w-30 bg-white border- rounded-lg align-items-center ">
      {prop.modal && prop.modal != null ? (
        <>
          {/* {prop.title && <div className="border-2 w-full">{prop.title}</div>} */}
          <div
            className="w-20 h-20 overflow-hidden m-auto"
            onClick={(e) => {
              e.stopPropagation(), setShowModal(true);
            }}
          >
            <img
              className="rounded-lg w-full h-full object-cover"
              src={prop.data?.image || "/image1.png"}
              alt="image"
              // onClick={(e) => e.stopPropagation()}
            />
          </div>
          <Modal
            show={showModal}
            close={() => handelClose()}
            data={prop.modal}
            category={prop.data.category}
            title={title}
          />{" "}
          {/* <h1>chetan</h1> */}
        </>
      ) : (
        prop?.data?.category &&
        prop?.data?.modal != "modal1" && (
          <Link
            onClick={(e) => e.stopPropagation()}
            to={`/cart?category=${prop.data.category}`}
          >
            <div className="w-20 h-20 overflow-hidden m-auto">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={prop.data?.image || "/image1.png"}
                alt="image"
              />
            </div>
          </Link>
        )
      )}
      {prop.data && prop.data.modal == "modal1" && (
        <>
          <div
            className="w-20 h-20 overflow-hidden m-auto"
            onClick={() => setShowModal(true)}
          >
            <img
              className="rounded-lg w-full h-full object-cover"
              src={prop.data?.image || "/image1.png"}
              alt="image"
            />
          </div>
          <Modal1
            show={showModal}
            close={() => handelClose()}
            data={prop.modal}
            category={prop.data.category}
            title={title}
            options_id={prop.data.id}
          />
          {/* <h1>chetan2</h1> */}
        </>
      )}
      {prop.data.options && (
        <>
          {/* {prop.title && <div className="border-2 w-full">{prop.title}</div>} */}
          {/* <div onClick={() => setShowModal(true)}>
            <img className="rounded-lg" src="/image1.png" alt="" />
          </div> */}
          <Modal
            show={showModal}
            close={() => handelClose()}
            data={prop.modal}
            category={prop.data.category}
            title={title}
          />{" "}
          {/* <h1>chetan</h1> */}
        </>
      )}

      <div className="py-1 flex items-center justify-center">
        <p className="text-xs text-gray-900">{title}</p>
      </div>
    </div>
  );
};
export default Categorycard;

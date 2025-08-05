// src/components/CustomerProfileModal.jsx
import React from "react";

const CustomerProfileModal = ({ customer, onClose }) => {
  if (!customer) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{customer.name}'s Profile</h2>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomerProfileModal;

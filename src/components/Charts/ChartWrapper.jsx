// src/components/charts/ChartWrapper.jsx
import React from 'react';

export default function ChartWrapper({ title, children,classNames }) {
  return (
    <div className={`bg-white shadow-md rounded-xl p-4 w-full ${classNames}`}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
      <div className="h-64 flex justify-around">
        {children}
      </div>
    </div>
  );
}

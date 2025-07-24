import React from 'react'

export default function TableWrapper({title,children,classNames}){
  return (
    <div className={`bg-white shadow-md rounded-xl p-4 w-full ${classNames}`}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
      <div className="">
        {children}
      </div>
    </div>
  );
}

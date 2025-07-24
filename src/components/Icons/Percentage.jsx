import React from "react";

const PercentageIcon = ({className,PclassName}) => {
  return (
    <span className={`inline-block p-2 rounded-lg ${className}`}>
      <span className="inline-block bg-green-600 p-1 rounded-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={`${PclassName}`}
          fill="white"
        >
          <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
        </svg>
      </span>
    </span>
  );
};
export default PercentageIcon;
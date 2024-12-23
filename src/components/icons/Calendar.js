import React from "react";

const Calendar = ({ fillColor = "#ffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M15 4.5V2.5M15 4.5V6.5M15 4.5H10.5M3 10.5V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V10.5H3Z"
        stroke={fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 10.5V6.5C3 5.39543 3.89543 4.5 5 4.5H7"
        stroke={fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 2.5V6.5"
        stroke={fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 10.5V6.5C21 5.39543 20.1046 4.5 19 4.5H18.5"
        stroke={fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Calendar;

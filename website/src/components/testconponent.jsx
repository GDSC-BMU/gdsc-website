import React from 'react';

const GDSCBMUComponent = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      className="svg-container"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0099ff"
        fontSize="48"
        className="animated-text" // Apply Tailwind CSS class for the text
        style={{
          animation: 'fadeIn 1.5s ease-in-out forwards' // Apply animation directly using inline style
        }}
      >
        GDSC BMU
      </text>
      {/* Add other SVG elements here */}
    </svg>
  );
};

export default GDSCBMUComponent;

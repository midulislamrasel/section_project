import React from "react";

const ButtonDefault = ({
  type,
  label,
  background = "#4CAF4F",
  padding,
  svg = false,
}) => {
  const ButtonStyle = {
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    display: "flex",
    padding: padding,
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "4px",
    background: background,
  };

  return (
    <>
      <button type={type} style={ButtonStyle}>
        {label}
        {svg ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
              stroke="white"
              stroke-width="1.1"
              stroke-linecap="round"
            />
          </svg>
        ) : null}
      </button>
    </>
  );
};

export default ButtonDefault;

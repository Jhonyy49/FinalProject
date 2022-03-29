import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center loader"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
      >
        <div className="spinner-border" role="status"></div>
      </div>
    </div>
  );
};

export default Loader;

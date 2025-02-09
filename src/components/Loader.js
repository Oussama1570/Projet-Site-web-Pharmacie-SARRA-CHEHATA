// src/components/Loader.js
import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "../Styles/StylesPuffLoader.css"; // Add CSS for positioning

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-container">
        <PuffLoader color="#36D7B7" size={100} />
      </div>
    )
  );
};

export default Loader;

import React from "react";
import "./snackbar.css";

function Snacbar({ text }) {
  return (
    <>
      <div className="snackbar_wrapper">
        <p>{text} !</p>
      </div>
    </>
  );
}

export default Snacbar;

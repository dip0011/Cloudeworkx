import React from "react";

function Navbar({ active }) {

  return (
    <>
      <div className="m-4 mt-0 pt-2 d-flex justify-content-between align-items-center">
        <div>Dashboard</div>
        <div><span className="text-primary">Home</span> / Dashboard</div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";

function Timing() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <h1>Royal Cinemas:</h1>
          <h5>Kothrud</h5>
        </div>
        <div className="d-flex align-items-start">
          <button className="mx-3 bg-success border-success p-2">
            1:30 PM
          </button>
          <button className="mx-3 bg-success border-success p-2">
            3:00 PM
          </button>
          <button className="mx-3 bg-success border-success p-2">
            7:00 PM
          </button>
        </div>
      </div>
    </>
  );
}

export default Timing;

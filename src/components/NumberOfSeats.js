import React from "react";

function NumberOfSeats() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h3>How many seats?</h3>
        <h1>Lorem, ipsum.</h1>
        <div className="d-flex justify-content-center">
          <button className="border-primary rounded-circle px-2 mx-2">
            1
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            2
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            3
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            4
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            5
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            6
          </button>
          <button className="border-primary rounded-circle px-2 mx-2">
            7
          </button>
        </div>
        <div>
            Normal - ₹350
        </div>
        <button className="rounded border-primary px-4 py-2 bg-danger">Select Seats</button>
      </div>
    </>
  );
}

export default NumberOfSeats;

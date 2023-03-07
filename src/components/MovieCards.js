import React from "react";
function MovieCards() {
  return (
    <>
    <div className="d-flex justify-content-center my-3">
      <div className="card mx-3">
        <img className="card-img-top" alt/>
        <div className="card-body">
          <h5 className="card-title">Pathan</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card mx-3">
        <img src="" className="card-img-top" alt/>
        <div className="card-body">
          <h5 className="card-title">Creed III</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card mx-3">
        <img src="" className="card-img-top" alt/>
        <div className="card-body">
          <h5 className="card-title">Fast X</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default MovieCards;

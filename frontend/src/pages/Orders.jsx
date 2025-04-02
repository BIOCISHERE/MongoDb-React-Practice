import React from "react";

const Orders = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="container-fluid text-center">
            <h1>My Orders</h1>
          </div>
          <div className="container-fluid border border-dark rounded">
            <div className="row">
              <div className="col">
                <div className="container-fluid">
                  <div className="row border border-dark-subtle my-1">
                    <div className="col-4">
                      <h4>Name</h4>
                    </div>
                    <div className="col-4">
                      <h4>Price</h4>
                    </div>
                    <div className="col-4">
                      <h4>Date</h4>
                    </div>
                  </div>
                  <div className="row border border-dark-subtle my-1">
                    <div className="col-4">
                      <h4>Name Test</h4>
                    </div>
                    <div className="col-4">
                      <h4>Price Test</h4>
                    </div>
                    <div className="col-4">
                      <h4>Date Test</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

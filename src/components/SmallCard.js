import React, { Component } from "react";
import image from "../image/river_london.jpg";

export default class smallCard extends Component {
  render() {
    return (
      <div className="card-main">
        <div className="card">
          <div className="row no-gutters cardhorizontal-body">
            <div className="col-auto">
              <img
                src={image}
                width="100"
                height="100"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col col-body">
              <div className="card-block px-2">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

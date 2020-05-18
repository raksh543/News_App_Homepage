import React, { Component } from "react";
import image from "../image/river_london.jpg";

export default class HorizontalCard extends Component {
  render() {
    return (
      <div className="card-main">
        <div className="card">
          <div className="row no-gutters cardhorizontal-body">
            <div className="col-auto">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col col-body">
              <div className="card-block px-2">
                <h4 className="card-title">
                  Sanctus sea sed takimata ut vero voluptua est lorem
                </h4>
                <p className="card-text">
                  Tatvero accusam et justo duo dolores et ea rebum. Stet clita
                  kasd gubergren, no sea consetetur sadipscing elitr, sed diam
                  nonumy eirmod takimata sanctus est Lorem ipsum dolor sit amet.
                  Duis autem vel eum iriure […]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

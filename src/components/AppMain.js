import React, { Component } from "react";
import Select from './Select';

class AppMain extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <h5 className="pageHead"> Select a News Source from the List</h5>
          <Select default="bbc-news" />
        </div>
      </div>
    );
  }
}
export default AppMain;

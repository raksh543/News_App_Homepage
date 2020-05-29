import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Container className="container-body"> Click below to sign in in admin panel</Container>
        
        <h1><a href="http://localhost:5000/admin">Admin Panel</a></h1>
      </div>
    );
  }
}
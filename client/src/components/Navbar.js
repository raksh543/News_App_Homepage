import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Container } from "reactstrap";

export default function Navbar() {
  return (
    <div>
      <Container className="container-nav">
        <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg">
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/politics">
                Politics
              </ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/world">World</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/europe">
                Europe
              </ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/economy">
                Economy
              </ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/money">Money</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/business">
                Business
              </ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="/archive">
                Archive
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.NavDropdown
                title="Features"
                id="basic-nav-dropdown"
              >
                <ReactBootstrap.NavDropdown.Item href="/action/3.1">
                  Action
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="/action/3.2">
                  Another action
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="/action/3.3">
                  Something
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Divider />
                <ReactBootstrap.NavDropdown.Item href="/action/3.4">
                  Separated link
                </ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.NavDropdown>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>

        {/* 2nd nav */}
        <div className="navbar_two">
          <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link href="/demo">
                  Demo
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/moredemo">
                  More Demos
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/government">
                  Government
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/financial">
                  Financial
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/sports">
                  Sports
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link href="/admin">Admin</ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
        </div>
        {/* 3rd nav */}

        <ReactBootstrap.Navbar bg="light" expand="lg" >
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Form inline>
            <ReactBootstrap.FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <ReactBootstrap.Button variant="outline-dark">
              Search
            </ReactBootstrap.Button>
          </ReactBootstrap.Form>
        </ReactBootstrap.Navbar>

        <br />
      </Container>
    </div>
  );
}
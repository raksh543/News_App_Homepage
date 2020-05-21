import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CarouselBody from "./CarouselBody";
import Cards from "./Cards";
import SimpleTabs from "./SimpleTabs";

export default class AppMain2 extends Component {
  render() {
    return (
      <div>
        <Container className="container-body">
          <Row>
            <Col xs="8">
              <div className="Carousel">
                <CarouselBody />
              </div>

              <Row>
                <Col xs="6">
                  <div className="title">POLITICS</div>
                  <Cards />
                </Col>
                <Col xs="6">
                  <div className="title">ECONOMY</div>
                  <Cards />
                </Col>
              </Row>
            </Col>
            <Col xs="4" className="posts-right-section">
              <Row className="popular-posts">
                <Col>
                  <div className="title">Popular Posts</div>
                  <div className="sample-text1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="sample-text2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="sample-text3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 simpleTab">
                  <SimpleTabs />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <div className="title">WORLD</div>
              <Cards />
            </Col>
            <Col xs="4">
              <div className="title">EUROPE</div>
              <Cards />
            </Col>
            <Col xs="4">
              <div className="title">BUSINESS</div>
              <Cards />
            </Col>
          </Row>
          <br/>
        </Container>
      </div>
    );
  }
}

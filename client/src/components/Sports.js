import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import HorizontalCard from "./HorizontalCard";
import SmallCard from "./SmallCard";

export default class Sports extends Component {
  render() {
    return (
      <div>
        <Container className="container-body">
          <Row>
            <Col xs="8">
              <div className="Sports-heading">
                <h2>Sports</h2>

                <p className="random-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <Row>
                <Col>
                  <HorizontalCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <HorizontalCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <HorizontalCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <HorizontalCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <HorizontalCard />
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
                <Col>
                  <div className="title mb-2">Authors</div>
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <div className="title mb-3">Featured Video</div>
                  <div className="col-video">
                    <iframe
                      width="340"
                      height="250"
                      src="//www.youtube.com/embed/WBgwuFM92i4?wmode=opaque&amp;hd=1&amp;autoplay=0&amp;showinfo=0&amp;controls=0&amp;rel=0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}


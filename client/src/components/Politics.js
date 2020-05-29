import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SmallCard from "./SmallCard";
import cardservice from '../services/cardservice';


function App() {
  const [cards, setcards] = useState(null);

  useEffect(() => {
    if (!cards) {
      getCards();
    }
  })

  const getCards = async () => {
    console.log("getting")
    let res = await cardservice.getAll("politics");
    console.log(res);
    setcards(res);
  }

  const renderCard = card => {
    return (
      <div className="card-main">
      <div className="card">
        <div className="row no-gutters cardhorizontal-body">
          <div className="col-auto">
            <img src={card.image} className="img-fluid" alt="" width="320px" />
          </div>
          <div className="col col-body">
            <div className="card-block px-2">
              <h4 className="card-title">
                {card.heading}
              </h4>
              <p className="card-text">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      // <li key={card._id} className="list__item card">
      //   <h3 className="card__name">{card.heading}</h3>
      //   <p className="card__description">{card.description}</p>
      // </li>
    );
  };

  return (
    <div className="App">
      <div>
        <Container className="container-body">
          <Row>
            <Col xs="8">
              <div className="Politics-heading">
                <h2>Politics</h2>

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
                {(cards && cards.length > 0) ? (
                  cards.map(card => renderCard(card))
                ) : (
                    <p>No news updates found</p>
                  )}
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


    </div>
  );
}

export default App;

// export default class Politics extends Component {
//   render() {
//     return (
//       <div>
//         <Container className="container-body">
//           <Row>
//             <Col xs="8">
//               <div className="Politics-heading">
//                 <h2>Politics</h2>

//                 <p className="random-text">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//               </div>

//               <Row>
//                 <Col>
//                   <HorizontalCard />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <HorizontalCard />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <HorizontalCard />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <HorizontalCard />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <HorizontalCard />
//                 </Col>
//               </Row>
//             </Col>
//             <Col xs="4" className="posts-right-section">
//               <Row className="popular-posts">
//                 <Col>
//                   <div className="title">Popular Posts</div>
//                   <div className="sample-text1">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </div>
//                   <div className="sample-text2">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </div>
//                   <div className="sample-text3">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type.
//                   </div>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <div className="title mb-2">Authors</div>
//                   <SmallCard />
//                   <SmallCard />
//                   <SmallCard />
//                   <SmallCard />
//                   <SmallCard />
//                   <div className="title mb-3">Featured Video</div>
//                   <div className="col-video">
//                     <iframe
//                       width="340"
//                       height="250"
//                       src="//www.youtube.com/embed/WBgwuFM92i4?wmode=opaque&amp;hd=1&amp;autoplay=0&amp;showinfo=0&amp;controls=0&amp;rel=0"
//                       allowfullscreen=""
//                     ></iframe>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           <br />
//         </Container>
//       </div>
//     );
//   }
// }


import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Home.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import {NavLink} from "react-router-dom";

const nav_links = [
 

  {
    path: "/questions",
    display: "Questions",
  },
  {
    path: "/users",
    display: "Users",
  },
  {
    path: "/companies",
    display: "Companies",
  },

];

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="2" className="mt-3 pt-2 static-sidebar">
              <div className="gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item sidebar-li pt-5" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : " "
                      }
                    >
                      {" "}
                      {item.display}{" "}
                    </NavLink>
                  </li>
                ))}
              </div>
            </Col>

            <Col lg="10" className="mt-5 pt-3  home-card-container">

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  
                </CardBody>
              </Card>

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  
                </CardBody>
              </Card>

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  
                </CardBody>
              </Card>

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  
                </CardBody>
              </Card>

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  
                </CardBody>
              </Card>

              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">stackoverflow</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1676358341~exp=1676358941~hmac=227b15528c693afe03ffdfeca6c13877097f68d4fe37f695420a34dbc6093ec9"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

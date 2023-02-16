import React from "react";
import { Container, Col, Row } from "reactstrap";

const About = () => {
  return (
    <section >
      <Container>
        <Row>
          <Col lg='6' className="mt-5 pt-5">
           <img src="https://img.freepik.com/free-vector/pensive-people-ask-questions-search-answers-online-vector-flat-illustration-faq-page-with-curious-puzzled-characters-laptop-question-marks-speech-bubbles_107791-9783.jpg?w=740&t=st=1676539870~exp=1676540470~hmac=9fe9150669247867c2dfde9689cb73cef3c56d9d6a409a3e16655fc18caf6500" alt="img" className="abtimg"/>
           {/* <img src="https://cdn-icons-png.flaticon.com/512/201/201064.png?w=740&t=st=1676539939~exp=1676540539~hmac=34d0a3afbc03bb72b924d55928056f40dfa109cd3e61de2045bebe6ffe77e2df" alt="img" /> */}
          </Col>
          <Col lg='6' className="mt-5 pt-5">
            <h6 className="abttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!
          
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!</h6>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

import React from "react";
import { Container, Col, Row } from "reactstrap";

const Products = () => {
  return (
    <section >
      <Container>
        <Row>
          
          <Col lg='6' className="mt-5 pt-5">
            <h6 className="abttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!
          
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati nesciunt pariatur veritatis consequatur eaque corporis possimus iusto voluptas iure commodi, vitae ipsam fuga dicta repellendus nisi. Laborum, perferendis ab!</h6>
            
          </Col>
          <Col lg='6' className="mt-5 pt-5">
           <img src="https://img.freepik.com/free-photo/words-papers-with-laptop-office_53876-123729.jpg?w=740&t=st=1676540667~exp=1676541267~hmac=01e0ddd1631b59062aaf5fe9f5ff22e5be40b13e4171c465dc9068db6fe3e2aa" alt="img" className="abtimg"/>
           {/* <img src="https://cdn-icons-png.flaticon.com/512/201/201064.png?w=740&t=st=1676539939~exp=1676540539~hmac=34d0a3afbc03bb72b924d55928056f40dfa109cd3e61de2045bebe6ffe77e2df" alt="img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;

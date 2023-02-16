import React from "react";
import { Container, Col, Row } from "reactstrap";

const Teams = () => {
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
           {/* <img src="https://img.freepik.com/free-vector/office-scenes-composition-with-group-chatting-coworkers-drinking-coffee-vector-illustration_1284-76171.jpg?w=996&t=st=1676540790~exp=1676541390~hmac=f1e5757f958fec624b3de23653df38b73fe740dc48a6a71e1df735b0c869d57c" alt="img" className="abtimg"/> */}
           {/* <img src="https://cdn-icons-png.flaticon.com/512/201/201064.png?w=740&t=st=1676539939~exp=1676540539~hmac=34d0a3afbc03bb72b924d55928056f40dfa109cd3e61de2045bebe6ffe77e2df" alt="img" /> */}
           <img src="https://img.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4704.jpg?w=740&t=st=1676540837~exp=1676541437~hmac=6323004b387517a64b65602a7e982a3c12fd45b95f048201275300433df7e686" alt="teamimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Teams;

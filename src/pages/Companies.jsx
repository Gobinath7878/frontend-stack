import React from 'react'
import { Container,Row,Col } from 'reactstrap'
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
const Companies = () => {
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

      <Col lg='10'className='mt-5 pt-5'>
        <h1>This is Companies section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam qui nulla deserunt ullam voluptatum, veniam perspiciatis! Nam eum blanditiis repellendus ducimus incidunt exercitationem, nihil tempora placeat rerum, facilis amet.</p>
      </Col>
     </Row>
      </Container>
    </section>
    </>
  )
}

export default Companies;
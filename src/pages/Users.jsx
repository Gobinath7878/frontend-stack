import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


import { BASE_URL } from "./../utils/config";

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


const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/users`);
        setUsers(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
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
        
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam qui nulla deserunt ullam voluptatum, veniam perspiciatis! Nam eum blanditiis repellendus ducimus incidunt exercitationem, nihil tempora placeat rerum, facilis amet.</p> */}
        <div className='d-flex align-items-center justify-content-between flex-wrap users-container'>
      {users.map((users) => (
        <div key={users._id} className='users-card'>
          <p>Username: {users.username}</p>
          <p>Email: {users.email}</p>
        </div>
      ))}
    </div>
      </Col>
     </Row>
      </Container>
    </section>
    </>
  )
}

export default Users;
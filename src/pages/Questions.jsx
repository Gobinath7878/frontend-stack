import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {NavLink} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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

const Questions = () => {
   
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/questions`);
        setQuestions(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
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

      <Col lg='10'className='mt-5 pt-4'>
        <div className="d-flex align-items-center justify-content-between">
        <h1>This is Questions section</h1>
        <Link to='/questions/ask' className='bg-primary ask-btn'>Ask Question</Link>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam qui nulla deserunt ullam voluptatum, veniam perspiciatis! Nam eum blanditiis repellendus ducimus incidunt exercitationem, nihil tempora placeat rerum, facilis amet.</p> */}
        <div>
      {questions.map((questions) => (
        <div key={questions._id} className='q-container'>
          <Link to={`/questions/${questions._id}`} >Question: {questions.title}</Link>
          <p>desc: {questions.desc}</p>

          <div className='d-flex align-items-center gap-3 flex-wrap'>
          <p>answers: {questions.answers.length}</p>
          <p>votes : 0</p>
          </div>
          
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

export default Questions
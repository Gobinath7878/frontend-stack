import React,{useRef,useContext,useState} from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import "../styles/QuestionsDetails.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from './../context/AuthContext'
import useFetch from "../components/hooks/useFetch"
//import axios from "axios";

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

const QuestionsDetails = () => {
  // const i =1;
  const { id } = useParams();
  // const [questions, setQuestions] = useState([]);
  const {user} =useContext(AuthContext)
  const answerMsgRef = useRef("");

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/api/v1/questions/${id}`);
  //       setQuestions(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchQuestions();
  // }, [id]);
  const {data:questions} = useFetch(`${BASE_URL}/api/v1/questions/${id}`)
  const {
    title,
    desc,
    answers,
  } = questions;

  const navigate = useNavigate()
  const options = { day: "numeric", month: "long", year: "numeric" };
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes(votes + 1);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const answerText = answerMsgRef.current.value;
    
    try{
      
      if (!user || user ===undefined || user ===null){
        alert('please signin')
        navigate('/login');
      }

      const answerObj = {
        username:user?.username,
        answerText,
      }
        const res =await fetch(`${BASE_URL}/api/v1/answers/${id}` ,{
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          credentials:'include',
          body:JSON.stringify(answerObj)
        })
        
        const result= await res.json();
        // if(!res.ok) {
        //   return alert(result.message);
        // }

        alert(result.message)

    } catch(err){
      console.log(err)
      // alert(err.message);
    }
  };

  // const handleVote = async () => {
  //   setVotes(votes + 1);
  
  //   const response = await fetch(`${BASE_URL}/api/v1/questions/${id}/vote`, {
  //     method: "POST",
  //   });
  
  //   if (!response.ok) {
  //     console.error("Failed to update vote count");
  //   }
  // };
  


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

            <Col lg="10" className="mt-4 pt-5">
              <h2 className="fw-bold">{title}</h2>
              <p>Desc: {desc}</p>
              <div className="mb-3">
              <button onClick={handleVote} className='primary__btn'>vote {votes}</button>
              </div>
              <div>
              <h5 className="fw-bold">answers({answers?.length})</h5>
     
                  <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      {/* {ratingOptions.map((element) => (
                        <span
                          key={element.id}
                          onClick={() => setQuestionsAnswer(element.value)}
                        >
                          {element.value}
                          <i className="ri-star-s-fill"></i>
                        </span>
                      ))} */}
                      {/* <p>others answers</p> */}
                    </div>
                    <div className="review_input">
                      <input
                        type="textarea"
                        ref={answerMsgRef}
                        placeholder="share your answers"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user_reviews">
                  <h3 className="fw-bold m-4">others answers</h3>

                    {answers?.map(answers => (
                      <div className="review_item" key={answers._id}>
                        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt="reviewer" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5 className="fw-bold">{answers.username}</h5>
                              <p>
                                {new Date(answers.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            {/* <span className="d-flex align-items-center">
                              {review.rating}<i className="ri-star-s-fill"></i>
                            </span> */}
                          </div>
                          
                          <h6 className="fw-bold">Answer: {answers.answerText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default QuestionsDetails;

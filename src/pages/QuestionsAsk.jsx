import React,{useState,useContext} from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink,Link } from "react-router-dom";
// import { Form } from "reactstrap";
import { BASE_URL } from "./../utils/config";
// import useFetch from "../components/hooks/useFetch"
 import {useNavigate} from "react-router-dom";
// import { useParams } from "react-router-dom";
 import {AuthContext} from './../context/AuthContext'



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
const QuestionsAsk = () => {
//   const { id } = useParams();
   const {user} =useContext(AuthContext)
  const navigate = useNavigate()
//   const questionsMsgRef = useRef("");
//   const [questions, setQuestions] = useState([]);


    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //      const title = questionsMsgRef.current.value;
    //      const desc = questionsMsgRef.current.value;

        
    //     try{
          
    //       if (!user || user ===undefined || user ===null){
    //         alert('please signin')
    //         navigate('/login');
    //       }
    
    //       const questionsObj = {
    //         username:user?.username,
    //         title,
    //         desc,
    //       }
    //         const res =await fetch(`${BASE_URL}/api/v1/answers/questions/create` ,{
    //           method:'post',
    //           headers:{
    //             'content-type':'application/json'
    //           },
    //           credentials:'include',
    //           body:JSON.stringify(questionsObj)
    //         })
            
    //         const result= await res.json();
    //         // if(!res.ok) {
    //         //   return alert(result.message);
    //         // }
    
    //         alert(result.message)
    
    //     } catch(err){
    //       console.log(err)
    //       // alert(err.message);
    //     }
    //   };

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      try {

      if (!user || user ===undefined || user ===null){
        alert('please signin')
        navigate('/login');
      }
        const response = await fetch(`${BASE_URL}/api/v1/questions/create` , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, desc }),
        });
        
        const data = await response.json();
        setSuccess(true);
        setTitle("");
        setDesc("");
      } catch (err) {
        setError("Failed to create. Please try again.");
      }
    };
  
  return (
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

          <Col lg="10" className="mt-5 pt-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
            <h1>Ask your question</h1>
            <Link to='/questions' className="bg-primary back-btn">Back</Link>
            </div>
            <div className="ask-container">
              <p>
                Writing a good question You're ready to ask a
                programming-related question and this form will help guide you
                through the process. Looking to ask a non-programming question?
                See the topics here to find a relevant site.
              </p>
              <ul>
                <li>* Summarize your problem in a one-line title.</li>
                <li>* Describe your problem in more detail.</li>
                <li>* Describe what you tried and what you expected to happen.</li>
                <li>* Add “tags” which help surface your question to members of the community.</li>
                <li>* Review your question and post it to the site.</li>
              </ul>
            </div>
            <div className="ask-form">
            <div>
      <h2 className="fw-bold m-4">Create a Public question:</h2>
      {success && (
        <div>
          <p className="success-msg m-3">Question created successfully!</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="ask-input m-3">
          
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='ask your question'
          />
        </div>
        <div className='ask-input m-3'>
          
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Give description'           
            />
            </div>
            <button type="submit" className="primary__btn m-2">Create Question</button>
            </form>
            </div>
            {/* <Form onSubmit={submitHandler}>                 
                    <div className="review_input">
                      <input
                        type="textarea"
                         ref={questionsMsgRef}
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
            </Form> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuestionsAsk;

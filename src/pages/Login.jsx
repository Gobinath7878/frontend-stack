import React,{useState,useContext,useEffect} from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate} from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../assets/images/Mobile.jpg";
// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
    const [credentials, setCredentials] = useState({
       email:undefined,
       password:undefined
      });
    
      const {dispatch} = useContext(AuthContext)
      const navigate = useNavigate()

      useEffect(()=>{
        window.scrollTo(0,0);
      },[]);

       const handleChange = e => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value });
      };
    // const handleChange=e=>{
    //     setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    //   }
    
      const handleClick= async e=>{
        e.preventDefault();
        dispatch({type:'LOGIN_START'})

      try{
          
        const res = await fetch(`${BASE_URL}/api/v1/auth/login`,{
          method:"post",
         headers:{
        "content-type":"application/json",
      },
      credentials:'include',
      body: JSON.stringify(credentials),
        })
        
       const result = await res.json()
       if(!res.ok) alert(result.message)

      //  console.log(result.data)
       dispatch({type:'LOGIN_SUCCESS', payload:result.data})
       navigate('/')

      } catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err.message});
      }

  //     const result = await res.json();
  //   if (!res.ok) return toast.error(result.message);
    

  //   dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
  //   navigate("/");
  //   return toast.success("Login successful");
  
  // } catch (err) {
  //   dispatch({ type: "LOGIN_FAILURE", payload: err.message });
  //   return toast.error(err.message);
  // }
      };

  return (
    <section className="pt-3">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
           <div className="login_container d-flex justify-content-center">
            <div className="login_img">
                <img src={loginImg} alt="loginImg" />
            </div>
            <div className="login_form">
                <Form onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Email" required id='email'
                        onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type="text" placeholder="password" required id='password'
                        onChange={handleChange}/>
                    </FormGroup>
                    <Button className="btn secondary__btn auth_btn" type="submit">Login</Button>
                </Form>
                <p>Don't have an account?
                    <Link to='/register' className="create-txt"> create</Link>
                </p>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
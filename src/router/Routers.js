import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from "./../pages/Home"
import Login from "./../pages/Login"
import Register from "./../pages/Register"
import Questions from '../pages/Questions'
import Users from '../pages/Users'
import Companies from '../pages/Companies'
import QuestionsDetails from '../pages/QuestionsDetails'
import QuestionsAsk from '../pages/QuestionsAsk'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/questions' element={<Questions/>}  />
        <Route path='/questions/ask' element={<QuestionsAsk/>}  />
        <Route path='/questions/:id' element={<QuestionsDetails/>}  />
        <Route path='/users' element={<Users/>}  />
        <Route path='/companies' element={<Companies/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        {/* <Route path='/tours' element={<Tours/>}  />
        <Route path='/tours/:id' element={<TourDetails/>}  />
        <Route path='/payment' element={<Payment/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/tours/search' element={<SearchResultList/>}  /> */}
    </Routes>
  )
}

export default Routers;

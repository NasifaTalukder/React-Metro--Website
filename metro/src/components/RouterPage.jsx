import React from 'react'
import App from '../App';
import Shop from "../components/Shop"
import {CheckOut} from '../components/CheckOut';
import {Account} from '../components/Account';
import {Error} from "../components/Error"
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";



const RouterPage = () => {
  return (
    <Router>
 
 <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/CheckOut' element={<CheckOut/>}/>
    <Route path='/My Account' element={<Account/>}/>
    <Route path='/404' element={<Error/>}/>

 </Routes>

    </Router>
    
  )
}

export default RouterPage

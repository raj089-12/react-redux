import React from 'react';
 import Navbar from './Navbar';
 import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import Raji from './Page/Raji'
//import Project from './Fetch/Project';
import Products from './Products'
import Product from './Component/Product'
import Home from './Component/Home'
const App = () => {
  return (
    <div>
      {/* <Raji/> */}
      <Router>
      {/* <Project/> */}
        <Navbar/> 
      <Routes>
      <Route path = '/Home' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>    
       <Route path='/Product/:id'element={<Product/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App;

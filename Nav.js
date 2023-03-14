import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Services from './Services'
import './home.css'
import Header from './Header'
import Body from './Body'
import Content from './Content'
function App() {
  return (
    <BrowserRouter>
       <Header />
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/content' element={<Content/>}></Route>
        </Routes>
        
        <Body/>
    </BrowserRouter>
  )
}

export default App
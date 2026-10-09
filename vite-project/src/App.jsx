import './App.css'
import Hello from './componet/hello.jsx'
import Home from './componet/home.jsx'
import Navbar from './componet/navbar.jsx'
import Layout from './component/layout.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hello' element={<Hello/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/hello' element={<Hello/>}/>
      <Route path='/layout' element={<Layout/>}/>
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App

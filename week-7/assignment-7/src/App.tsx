import Landing from './components/Landing'
import NavBar from './components/NavBar'
import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'
import Assignment4 from './components/Assignment4'
import Assignment5 from './components/Assignment5'
import Assignment6 from './components/Assignment6'
import Assignment7 from './components/Assignment7'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path='/'
          element={<Landing></Landing>}
        ></Route>
        <Route
          path='/Assignment1'
          element={<Assignment1></Assignment1>}
        ></Route>
        <Route
          path='/Assignment2'
          element={<Assignment2></Assignment2>}
        ></Route>
        <Route
          path='/Assignment3'
          element={<Assignment3></Assignment3>}
        ></Route>
        <Route
          path='/Assignment4'
          element={<Assignment4></Assignment4>}
        ></Route>
        <Route
          path='/Assignment5'
          element={<Assignment5></Assignment5>}
        ></Route>
        <Route
          path='/Assignment6'
          element={<Assignment6></Assignment6>}
        ></Route>
        <Route
          path='/Assignment7'
          element={<Assignment7></Assignment7>}
        ></Route>
      </Routes>
    </>
  )
}

export default App

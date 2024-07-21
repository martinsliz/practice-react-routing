import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Navbar from './components/NavBar'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      {/* <div>
        <Navbar />
      </div> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

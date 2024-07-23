import './App.css'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Login from './components/Login'
import Navbar from './components/NavBar'
import NotFound from './components/NotFound'
import SearchUser from './components/SearchUser'
import UserProfile from './components/UserProfile'
import AuthProfile from './components/AuthProfile'

function App() {
  const [username, setUsername] = useState('')
  const [isLogged, setIsLogged] = useState(false)
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
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route
            path="/login"
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
          />
          <Route
            path="/authProfile"
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace to={'/login'} />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

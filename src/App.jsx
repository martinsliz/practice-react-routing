import './App.css'
import Home from './components/Home'
import { useState, lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const Users = lazy(() => import('./components/Users'))
const Login = lazy(() => import('./components/Login'))
const About = lazy(() => import('./components/About'))
const NotFound = lazy(() => import('./components/NotFound'))
const SearchUser = lazy(() => import('./components/SearchUser'))
const UserProfile = lazy(() => import('./components/UserProfile'))
const AuthProfile = lazy(() => import('./components/AuthProfile'))

function App() {
  const [username, setUsername] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const location = useLocation()
  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading...</h1>}>
            <Routes location={location}>
              {/* <Route path="/" element={<Navbar isLogged={isLogged} />}> */}
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
              {/* </Route> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App

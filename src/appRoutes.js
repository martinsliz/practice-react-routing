import { lazy } from 'react'
import Home from './components/Home'

const Users = lazy(() => import('./components/Users'))
const Login = lazy(() => import('./components/Login'))
const About = lazy(() => import('./components/About'))
const RepoDetail = lazy(() => import('./components/RepoDetail'))
const NotFound = lazy(() => import('./components/NotFound'))
const SearchUser = lazy(() => import('./components/SearchUser'))
const UserProfile = lazy(() => import('./components/UserProfile'))
const AuthProfile = lazy(() => import('./components/AuthProfile'))

export const appRoutes = [
  {
    path: '/',
    component: Home,
    requiresAuth: false
  },
  {
    path: '/users',
    component: Users,
    requiresAuth: false
  },
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/about',
    component: About,
    requiresAuth: false
  },
  {
    path: '/repo-detail/:name/:username',
    component: RepoDetail,
    requiresAuth: false
  },
  {
    path: '*',
    component: NotFound,
    requiresAuth: false
  },
  {
    path: '/search',
    component: SearchUser,
    requiresAuth: false
  },
  {
    path: '/authProfile',
    component: AuthProfile,
    requiresAuth: true
  },
  {
    path: '/users/user/:username',
    component: UserProfile,
    requiresAuth: false
  }
]

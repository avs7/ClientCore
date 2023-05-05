import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './layouts/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Summary from './components/Summary'
import Contacts from './components/Contacts'
import Calendar from './components/Calendar'
import Tasks from './components/Tasks'
import Sidebar from './layouts/Sidebar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'sidebar',
    element: <Sidebar />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Summary />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

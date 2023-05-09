import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './layouts/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Summary from './pages/Summary'
import Contacts from './pages/Contacts'
import Calendar from './pages/Calendar'
import TaskList from './components/tasks/TaskList'
import TaskDetails from './components/tasks/TaskDetails'

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
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Summary />,
      },
      {
        path: 'tasks',
        element: <TaskList />,
      },

      {
        path: 'tasks/:id',
        element: <TaskDetails />,
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

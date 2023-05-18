import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './layouts/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Summary from './pages/Summary'
import Contacts from './pages/Contacts'
import Notes from './pages/Notes'
import NoteDetails from './components/notes/NoteDetails'
import Tasks from './pages/Tasks'
import TaskDetails from './components/tasks/TaskDetails'
import ContactDetails from './components/contacts/ContactDetails'

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
    path: 'signup',
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
        element: <Tasks />,
        children: [
          {
            path: ':id',
            element: <TaskDetails />,
          },
        ],
      },

      {
        path: 'contacts',
        element: <Contacts />,
        children: [
          {
            path: ':id',
            element: <ContactDetails />,
          },
        ],
      },
      {
        path: 'notes',
        element: <Notes />,
        children: [
          {
            path: ':id',
            element: <NoteDetails />,
          },
        ],
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

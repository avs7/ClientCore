import TaskList from '../components/tasks/TaskList'
import { Outlet } from 'react-router-dom'

export default function Tasks() {
  return (
    <div className='overflow-hidden rounded-md bg-white shadow'>
      <TaskList />
      <Outlet />
    </div>
  )
}

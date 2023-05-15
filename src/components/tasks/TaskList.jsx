import { sampleTasks } from '../../data'
import { Link } from 'react-router-dom'

export default function Tasks() {
  return (
    <div>
      <ul role='list' className='divide-y divide-gray-100'>
        {sampleTasks.map(task => (
          <li key={task.id} className='px-6 py-4'>
            <Link to={`${task.id}`}>
              <div className='min-w-min'>
                <p className='text-sm font-semibold leading-6 text-gray-900'>
                  {task.title}
                </p>
                <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                  {task.dueDate}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

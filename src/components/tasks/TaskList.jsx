import { sampleTasks } from '../../data'
import { Link } from 'react-router-dom'

export default function Tasks() {
  return (
    <nav className='min-h-0 flex-1 overflow-y-auto' aria-label='Contacts'>
      {sampleTasks.map(task => (
        <div key={task.id} className='relative'>
          <ul role='list' className='relative z-0 divide-y divide-gray-200'>
            <li>
              <div
                className='group relative flex items-center space-x-3 px-6 py-5
              focus-within:ring-2 focus-within:ring-inset
              focus-within:ring-sky-900 hover:bg-gray-50 justify-between'>
                <div className='flex'>
                  <div className='min-w-0 flex '>
                    <Link className='focus:outline-none' to={`${task.id}`}>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p className='text-sm font-medium text-gray-900 truncate'>
                        {task.title}
                      </p>
                      <p className='truncate text-sm text-gray-500'>
                        {task.dueDate}
                      </p>
                    </Link>
                    <div className='flex items-center  ml-40  opacity-0 group-hover:opacity-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.2}
                        stroke='#475569'
                        onClick={console.log('clicked')}
                        className='w-4 h-4 mr-2 ml-2 hover:cursor-pointer'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.2}
                        stroke='#475569'
                        onClick={console.log('clicked')}
                        className='w-4 h-4 mr-2 ml-2 hover:cursor-pointer'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      ))}
    </nav>
  )
}

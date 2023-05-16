import {
  CalendarDaysIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'

import { sampleTasks } from '../../data'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function TaskDetails() {
  const params = useParams()
  const [task, setTask] = useState({})

  useEffect(() => {
    setTask(sampleTasks.find(t => t.id === params.id))
  }, [params.id])

  return (
    <div className='lg:col-start-3 lg:row-end-1 pt-6'>
      <h2 className='sr-only'>Summary</h2>
      <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
        <dl className='flex flex-wrap'>
          <div className='flex-auto pl-6 pt-6'>
            <dt className='text-sm font-semibold leading-6 text-gray-900'>
              Task
            </dt>
            <dd className='mt-1 text-base font-semibold leading-6 text-gray-900'>
              {task?.title}
            </dd>
          </div>
          <div className='flex-none self-end px-6 pt-4'>
            <dt className='sr-only'>Status</dt>
            <dd className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
              {task?.completed ? 'Completed' : 'Pending'}
            </dd>
          </div>
          <div className='mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6'>
            <dt className='flex-none'>
              <span className='sr-only'>Client</span>
              <UserCircleIcon
                className='h-6 w-5 text-gray-400'
                aria-hidden='true'
              />
            </dt>
            <dd className='text-sm font-medium leading-6 text-gray-900'>
              Random Person
            </dd>
          </div>
          <div className='mt-4 flex w-full flex-none gap-x-4 px-6'>
            <dt className='flex-none'>
              <span className='sr-only'>Due date</span>
              <CalendarDaysIcon
                className='h-6 w-5 text-gray-400'
                aria-hidden='true'
              />
            </dt>
            <dd className='text-sm leading-6 text-gray-500'>
              <time dateTime='2023-01-31'>{task?.dueDate}</time>
            </dd>
          </div>
          <div className='mt-4 flex w-full flex-none gap-x-4 px-6'>
            <dt className='flex-none'>
              <span className='sr-only'>Priority</span>
              <ExclamationTriangleIcon
                className='h-6 w-5 text-gray-400'
                aria-hidden='true'
              />
            </dt>
            <dd className='text-sm leading-6 text-gray-500'>
              Priority: {task?.priority}
            </dd>
          </div>
          <div className='mt-4 flex w-full flex-none gap-x-4 px-6'>
            <dt className='flex-none'>
              <span className='sr-only'>Details</span>
              <DocumentTextIcon
                className='h-6 w-5 text-gray-400'
                aria-hidden='true'
              />
            </dt>
            <dd className='text- leading-6 text-gray-500'>{task?.details}</dd>
          </div>
        </dl>
        <div className='mt-6 border-t border-gray-900/5 px-6 py-6'>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Update Task <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

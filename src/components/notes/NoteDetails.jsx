import {
  CalendarDaysIcon,
  DocumentTextIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'

import { sampleNotes } from '../../data'
import NoteForm from './NoteForm'
import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import ModalLayout from '../../layouts/ModalLayout'

export default function NoteDetails() {
  const params = useParams()
  const [note, setNote] = useState({})

  const { handleClick } = useOutletContext()

  useEffect(() => {
    setNote(sampleNotes.find(n => n.id === params.id))
  }, [params.id])

  return (
    <div className='lg:col-start-3 lg:row-end-1 pt-6'>
      <div className='mt-6 mb-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          onClick={() => handleClick('Edit Note', <NoteForm />)}>
          Edit Note
        </button>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          onClick={() => handleClick('New Note', <NoteForm />)}>
          New Note
        </button>
      </div>
      <h2 className='sr-only'>Summary</h2>
      <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
        <dl className='flex flex-wrap'>
          <div className='flex-auto pl-6 pt-6'>
            <dt className='text-sm font-semibold leading-6 text-gray-900'>
              Note
            </dt>
            <dd className='mt-1 text-base font-semibold leading-6 text-gray-900'>
              {note?.title}
            </dd>
          </div>
          <div className='flex-none self-end px-6 pt-4'>
            <dt className='sr-only'>Status</dt>
            <dd className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
              Urgent
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
              <time dateTime='2023-01-31'>{note?.updated_at}</time>
            </dd>
          </div>
          <div className='mt-4 flex w-full flex-none gap-x-4 px-6'>
            <dt className='flex-none'>
              <span className='sr-only'>Priority</span>
              <TagIcon className='h-6 w-5 text-gray-400' aria-hidden='true' />
            </dt>
            <dd className='text-sm leading-6 text-gray-500'>
              {note?.category}
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
            <dd className='text- leading-6 text-gray-500'>{note?.details}</dd>
          </div>
        </dl>
        <div className='mt-6 border-t border-gray-900/5 px-6 py-6'>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Something here <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
      <ModalLayout />
    </div>
  )
}

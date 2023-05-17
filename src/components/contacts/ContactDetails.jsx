import { sampleContacts } from '../../data'
import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { PaperClipIcon, TagIcon } from '@heroicons/react/20/solid'
import TasksSummary from '../tasks/TasksSummary'
import NotesSummary from '../notes/NotesSummary'
import ContactForm from './ContactForm'
import ModalLayout from '../../layouts/ModalLayout'

const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]

export default function ContactDetails() {
  const params = useParams()
  const [contact, setContact] = useState({})

  const { handleClick } = useOutletContext()

  useEffect(() => {
    setContact(sampleContacts.find(c => c.id === params.id))
  }, [params.id])

  return (
    <>
      <div className='min-h-full'>
        <main className='py-10'>
          <div className='mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center space-x-5'>
              <div className='flex-shrink-0'>
                <div className='relative'>
                  <img
                    className='h-16 w-16 rounded-full'
                    src={contact?.imageUrl}
                    alt={contact?.first_name}
                  />
                  <span
                    className='absolute inset-0 rounded-full shadow-inner'
                    aria-hidden='true'
                  />
                </div>
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>
                  {contact?.first_name}
                </h1>
                <p className='text-sm font-medium text-gray-500'>
                  {contact?.position} at {contact?.organization}
                </p>
              </div>
            </div>
            <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                onClick={() => handleClick('Edit Contact', <ContactForm />)}>
                Edit Contact
              </button>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                onClick={() => handleClick('New Contact', <ContactForm />)}>
                New Contact
              </button>
            </div>
          </div>

          <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
            <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
              <section aria-labelledby='contact-details'>
                <div className='bg-white shadow sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6'>
                    <h2
                      id='contact-details'
                      className='text-lg font-medium leading-6 text-gray-900'>
                      Contact Details
                    </h2>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500 flex'>
                      <TagIcon
                        className='h-6 w-5 text-gray-400 mr-1'
                        aria-hidden='true'
                      />
                      {contact?.category}
                    </p>
                  </div>
                  <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Phone
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.phone}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email address
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.email}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Date of birth
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.dob}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Address
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.address}
                        </dd>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.city}, {contact?.state} {contact?.zip_code}
                        </dd>
                      </div>
                      <div className='sm:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500'>
                          About
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {contact?.about}
                        </dd>
                      </div>
                      <div className='sm:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Attachments
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          <ul
                            role='list'
                            className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                            {attachments.map(attachment => (
                              <li
                                key={attachment.name}
                                className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                                <div className='flex w-0 flex-1 items-center'>
                                  <PaperClipIcon
                                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-2 w-0 flex-1 truncate'>
                                    {attachment.name}
                                  </span>
                                </div>
                                <div className='ml-4 flex-shrink-0'>
                                  <a
                                    href={attachment.href}
                                    className='font-medium text-blue-600 hover:text-blue-500'>
                                    Download
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
              <NotesSummary />
            </div>
            <TasksSummary />
          </div>
        </main>
        <ModalLayout />
      </div>
    </>
  )
}

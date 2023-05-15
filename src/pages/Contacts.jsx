import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Outlet } from 'react-router-dom'
import ContactList from '../components/contacts/ContactList'

export default function Contacts() {
  return (
    <>
      <div className='flex h-full'>
        <div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
          <div className='relative z-0 flex flex-1 overflow-hidden'>
            <main className='relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last'>
              <Outlet />
            </main>
            <aside className='hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col'>
              <div className='px-6 pb-4 pt-6'>
                <h2 className='text-lg font-medium text-gray-900'>Contacts</h2>
                <p className='mt-1 text-sm text-gray-600'>
                  Search 3,018 contacts
                </p>
                <form className='mt-6 flex gap-x-4' action='#'>
                  <div className='min-w-0 flex-1'>
                    <label htmlFor='search' className='sr-only'>
                      Search
                    </label>
                    <div className='relative rounded-md shadow-sm'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                        <MagnifyingGlassIcon
                          className='h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </div>
                      <input
                        type='search'
                        name='search'
                        id='search'
                        className='block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6'
                        placeholder='Search'
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                    <FunnelIcon className='h-5 w-5' aria-hidden='true' />
                    <span className='sr-only'>Search</span>
                  </button>
                </form>
              </div>
              <ContactList />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

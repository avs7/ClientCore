import { Link } from 'react-router-dom'
import { sampleContacts } from '../../data'

export default function ContactList() {
  return (
    <nav className='min-h-0 flex-1 overflow-y-auto' aria-label='Contacts'>
      {sampleContacts.map(contact => (
        <div key={contact.id} className='relative'>
          <ul role='list' className='relative z-0 divide-y divide-gray-200'>
            <li>
              <div
                className='relative flex items-center space-x-3 px-6 py-5
              focus-within:ring-2 focus-within:ring-inset
              focus-within:ring-sky-900 hover:bg-gray-50'>
                <div className='flex'>
                  <img
                    className='h-10 w-10 rounded-full mr-2'
                    src={contact.imageUrl}
                    alt={contact.first_name}
                  />
                  <div className='min-w-0 flex'>
                    <Link className='focus:outline-none' to={`${contact.id}`}>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p className='text-sm font-medium text-gray-900'>
                        {contact.first_name} {contact.last_name}
                      </p>
                      <p className='truncate text-sm text-gray-500'>
                        {contact.category}
                      </p>
                    </Link>
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

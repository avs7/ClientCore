import { sampleNotes } from '../../data'

export default function NotesSummary() {
  return (
    <section aria-labelledby='notes-title'>
      <div className='bg-white shadow sm:overflow-hidden sm:rounded-lg'>
        <div className='divide-y divide-gray-200'>
          <div className='px-4 py-5 sm:px-6'>
            <h2 id='notes-title' className='text-lg font-medium text-gray-900'>
              Notes
            </h2>
          </div>
          <div className='px-4 py-6 sm:px-6'>
            <ul role='list' className='space-y-8'>
              {sampleNotes.map(note => (
                <li key={note.id}>
                  <div className='flex space-x-3'>
                    <div>
                      <div className='text-sm'>
                        <a href='#' className='font-medium text-gray-900'>
                          {note.title}
                        </a>
                      </div>
                      <div className='mt-1 text-sm text-gray-700'>
                        <p>{note.details}</p>
                      </div>
                      <div className='mt-2 space-x-2 text-sm'>
                        <span className='font-medium text-gray-500'>
                          {note.created_at}
                        </span>{' '}
                        <span className='font-medium text-gray-500'>
                          &middot;
                        </span>{' '}
                        <button
                          type='button'
                          className='font-medium text-gray-900'>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className='mt-4 mb-4 flex items-center justify-center'>
          <button
            type='submit'
            className='inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
            New note
          </button>
        </div>
      </div>
    </section>
  )
}

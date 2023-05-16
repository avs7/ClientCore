export default function TasksSummary() {
  return (
    <section
      aria-labelledby='timeline-title'
      className='lg:col-span-1 lg:col-start-3'>
      <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
        <h2 id='timeline-title' className='text-lg font-medium text-gray-900'>
          Tasks
        </h2>
        <fieldset className='border-b border-t border-gray-200'>
          <legend className='sr-only'>Notifications</legend>
          <div className='divide-y divide-gray-200'>
            <div className='relative flex items-start pb-4 pt-3.5'>
              <div className='min-w-0 flex-1 text-sm leading-6'>
                <label htmlFor='comments' className='font-medium text-gray-900'>
                  Comments
                </label>
                <p id='comments-description' className='text-gray-500'>
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
              <div className='ml-3 flex h-6 items-center'>
                <input
                  id='comments'
                  aria-describedby='comments-description'
                  name='comments'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
            <div className='relative flex items-start pb-4 pt-3.5'>
              <div className='min-w-0 flex-1 text-sm leading-6'>
                <label
                  htmlFor='candidates'
                  className='font-medium text-gray-900'>
                  Candidates
                </label>
                <p id='candidates-description' className='text-gray-500'>
                  Get notified when a candidate applies for a job.
                </p>
              </div>
              <div className='ml-3 flex h-6 items-center'>
                <input
                  id='candidates'
                  aria-describedby='candidates-description'
                  name='candidates'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
            <div className='relative flex items-start pb-4 pt-3.5'>
              <div className='min-w-0 flex-1 text-sm leading-6'>
                <label htmlFor='offers' className='font-medium text-gray-900'>
                  Offers
                </label>
                <p id='offers-description' className='text-gray-500'>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
              <div className='ml-3 flex h-6 items-center'>
                <input
                  id='offers'
                  aria-describedby='offers-description'
                  name='offers'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div className='mt-6 flex flex-col justify-stretch'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
            New task
          </button>
        </div>
      </div>
    </section>
  )
}

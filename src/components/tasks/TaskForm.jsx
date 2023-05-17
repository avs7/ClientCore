import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function TaskForm() {
  return (
    <form>
      <div className='space-y-12 sm:space-y-16'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Profile
          </h2>
          <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-600'>
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Title
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    autoComplete='title'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='Task Title'
                  />
                </div>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                About
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
                <p className='mt-3 text-sm leading-6 text-gray-600'>
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Photo
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex items-center gap-x-3'>
                  <UserCircleIcon
                    className='h-12 w-12 text-gray-300'
                    aria-hidden='true'
                  />
                  <button
                    type='button'
                    className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Cover photo
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <PhotoIcon
                      className='mx-auto h-12 w-12 text-gray-300'
                      aria-hidden='true'
                    />
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                First name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Last name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Email address
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Priority
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <select
                  id='priority'
                  name='priority'
                  autoComplete='priority'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='region'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                State / Province
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                ZIP / Postal code
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'>
          Cancel
        </button>
        <button
          type='submit'
          className='inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Save
        </button>
      </div>
    </form>
  )
}
